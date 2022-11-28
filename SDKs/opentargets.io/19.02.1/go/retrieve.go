package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Retrieve struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRetrieve(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Retrieve {
	return &Retrieve{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAssociationByID - Get association by id
// Once we integrate all evidence connecting a target to a specific disease, we
//
//	compute an association score by the means of an harmonic sum. This *association score* provides
//	an indication of how strong the evidence behind each connection is and can be
//	used to rank genes in order of likelihood as drug targets.
//	The association ID is constructed by using the Ensembl ID of the gene and the
//	EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
//	The method returns an association object, which contains the data and summary
//	on each evidence type included in the calculation of the score, as well as the score itself.
func (s *Retrieve) GetAssociationByID(ctx context.Context, request operations.GetAssociationByIDRequest) (*operations.GetAssociationByIDResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/association"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAssociationByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetEvidenceByID - Get evidence by ID
// We call **evidence** a unit of data that support a connection between a target and a disease.
// The Open Targets Platform integrates multiple types of evidence including genetic associations,
// somatic mutations, RNA expression and target-disease associations mined from the literature.
// This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
// targetvalidation.org ID.
//
// Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
// You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).
//
// **Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.
func (s *Retrieve) GetEvidenceByID(ctx context.Context, request operations.GetEvidenceByIDRequest) (*operations.GetEvidenceByIDResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/evidence"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEvidenceByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostEvidenceByID - Get evidence for a list of IDs
// This is the POST version of [/public/evidence](#!/public/get_public_evidence).
// It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.
func (s *Retrieve) PostEvidenceByID(ctx context.Context, request operations.PostEvidenceByIDRequest) (*operations.PostEvidenceByIDResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/evidence"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostEvidenceByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
