package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type BoundingBox struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBoundingBox(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BoundingBox {
	return &BoundingBox{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetGeomarksGeomarkIDBoundingBoxFileFormatExtension - Gets the bounding box of the geomark
// The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
func (s *BoundingBox) GetGeomarksGeomarkIDBoundingBoxFileFormatExtension(ctx context.Context, request operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest) (*operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/geomarks/{geomarkId}/boundingBox.{fileFormatExtension}", request.PathParams)

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

	res := &operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse{
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
