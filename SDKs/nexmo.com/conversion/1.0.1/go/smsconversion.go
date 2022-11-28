package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type SmsConversion struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSmsConversion(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SmsConversion {
	return &SmsConversion{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SmsConversion - Tell Nexmo if your SMS message was successful
// Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.
func (s *SmsConversion) SmsConversion(ctx context.Context, request operations.SmsConversionRequest) (*operations.SmsConversionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/sms"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SmsConversionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 420:
	case httpRes.StatusCode == 423:
	}

	return res, nil
}
