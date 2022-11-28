package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Create struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCreate(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Create {
	return &Create{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostGeomarksCopy - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
// The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
func (s *Create) PostGeomarksCopy(ctx context.Context, request operations.PostGeomarksCopyRequest) (*operations.PostGeomarksCopyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/geomarks/copy"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostGeomarksCopyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostGeomarksNew - Create a new geomark
// Create a new geomark from the geometries read from the 'body' parameter or file.
func (s *Create) PostGeomarksNew(ctx context.Context, request operations.PostGeomarksNewRequest) (*operations.PostGeomarksNewResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/geomarks/new"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.PostGeomarksNewResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
