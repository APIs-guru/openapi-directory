package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type AttendanceSubscriberStateChanges struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAttendanceSubscriberStateChanges(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AttendanceSubscriberStateChanges {
	return &AttendanceSubscriberStateChanges{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate - Record
// Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
func (s *AttendanceSubscriberStateChanges) PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreate(ctx context.Context, request operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest) (*operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/create", request.PathParams)

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchResponseSubscriberVidResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchResponseSubscriberVidResponse = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmail - Record
// Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params
func (s *AttendanceSubscriberStateChanges) PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmail(ctx context.Context, request operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailRequest) (*operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/email-create", request.PathParams)

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchResponseSubscriberEmailResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchResponseSubscriberEmailResponse = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}
