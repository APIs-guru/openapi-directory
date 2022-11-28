package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type ObjectDetectionModels struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewObjectDetectionModels(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ObjectDetectionModels {
	return &ObjectDetectionModels{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDeviceCameraSenseObjectDetectionModels - Returns the MV Sense object detection model list for the given camera
// Returns the MV Sense object detection model list for the given camera
func (s *ObjectDetectionModels) GetDeviceCameraSenseObjectDetectionModels(ctx context.Context, request operations.GetDeviceCameraSenseObjectDetectionModelsRequest) (*operations.GetDeviceCameraSenseObjectDetectionModelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/camera/sense/objectDetectionModels", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceCameraSenseObjectDetectionModelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDeviceCameraSenseObjectDetectionModels200ApplicationJSONObject = out
		}
	}

	return res, nil
}
