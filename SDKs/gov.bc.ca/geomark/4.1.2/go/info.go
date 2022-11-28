package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Info struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInfo(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Info {
	return &Info{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetGeomarksGeomarkIDFileFormatExtension - Get information about a particular geomark
// The attribution can be downloaded as a info file format. The download files can then be processed by a client application to access the geomark info fields and to get the URLs to the geometry download resources.
func (s *Info) GetGeomarksGeomarkIDFileFormatExtension(ctx context.Context, request operations.GetGeomarksGeomarkIDFileFormatExtensionRequest) (*operations.GetGeomarksGeomarkIDFileFormatExtensionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/geomarks/{geomarkId}.{fileFormatExtension}", request.PathParams)

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

	res := &operations.GetGeomarksGeomarkIDFileFormatExtensionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
