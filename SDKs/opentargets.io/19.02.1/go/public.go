package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Public struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPublic(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Public {
	return &Public{
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
func (s *Public) GetAssociationByID(ctx context.Context, request operations.GetAssociationByIDRequest) (*operations.GetAssociationByIDResponse, error) {
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

// GetAssociationFilter - Filter available associations
// More complex queries for associations scores and objects can be done using
// this method, which allows to sort in different order, restrict to a specific class
// of diseases or targets, as well as filtering results by score and associated pathways.
func (s *Public) GetAssociationFilter(ctx context.Context, request operations.GetAssociationFilterRequest) (*operations.GetAssociationFilterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/association/filter"

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

	res := &operations.GetAssociationFilterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetDataMetrics - Get metrics about the current data release
// Returns the metrics about associations and evidences, divided by datasource, genes and so on.
func (s *Public) GetDataMetrics(ctx context.Context) (*operations.GetDataMetricsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/utils/metrics"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataMetricsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetDataStats - Get statistics about the current data release
// Returns the number of associations and evidences, divided by datasource.
func (s *Public) GetDataStats(ctx context.Context) (*operations.GetDataStatsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/utils/stats"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataStatsResponse{
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
func (s *Public) GetEvidenceByID(ctx context.Context, request operations.GetEvidenceByIDRequest) (*operations.GetEvidenceByIDResponse, error) {
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

// GetEvidenceFilter - Filter available evidence
// The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
// Filters can be used to restrict the results by source and type of data,
// or limit results to targets which are part of a particular pathway.
// Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
// **Note** that multiple genes and diseases can be specified in the same request.
func (s *Public) GetEvidenceFilter(ctx context.Context, request operations.GetEvidenceFilterRequest) (*operations.GetEvidenceFilterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/evidence/filter"

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

	res := &operations.GetEvidenceFilterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetPing - Ping service
// Check if the API is up
func (s *Public) GetPing(ctx context.Context) (*operations.GetPingResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/utils/ping"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetSearch - Search for a disease or a target
// This method allows you to look for gene or diseases of interest using a free text search,
// replicating the functionality of the search box on our homepage. It should be used to identify
// the best match for a disease or target of interest, rather than gathering a specific set of evidence.
func (s *Public) GetSearch(ctx context.Context, request operations.GetSearchRequest) (*operations.GetSearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/search"

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

	res := &operations.GetSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetTherapeuticAreas - Get the list of therapeutic areas about the current data release
// Returns the list of therapeutic areas for the current data release
func (s *Public) GetTherapeuticAreas(ctx context.Context) (*operations.GetTherapeuticAreasResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/utils/therapeuticareas"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTherapeuticAreasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetVersion - Get API version
// Returns current API version.
func (s *Public) GetVersion(ctx context.Context) (*operations.GetVersionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/utils/version"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostAssociationFilter - Batch query available associations
// Complex queries and filters for association objects can also be submitted using a JSON
// object and the equivalent POST method.
func (s *Public) PostAssociationFilter(ctx context.Context, request operations.PostAssociationFilterRequest) (*operations.PostAssociationFilterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/association/filter"

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

	res := &operations.PostAssociationFilterResponse{
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
func (s *Public) PostEvidenceByID(ctx context.Context, request operations.PostEvidenceByIDRequest) (*operations.PostEvidenceByIDResponse, error) {
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

// PostEvidenceFilter - Batch filter available evidence
// POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
// Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
func (s *Public) PostEvidenceFilter(ctx context.Context, request operations.PostEvidenceFilterRequest) (*operations.PostEvidenceFilterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/platform/public/evidence/filter"

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

	res := &operations.PostEvidenceFilterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
