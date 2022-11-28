package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Status struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewStatus(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Status {
	return &Status{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus - Get subscription statuses for a contact
// Returns a list of subscriptions and their status for a given contact.
func (s *Status) GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus(ctx context.Context, request operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest) (*operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/communication-preferences/v3/status/email/{emailAddress}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PublicSubscriptionStatusesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PublicSubscriptionStatusesResponse = out
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

// PostCommunicationPreferencesV3SubscribeSubscribe - Subscribe a contact
// Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
func (s *Status) PostCommunicationPreferencesV3SubscribeSubscribe(ctx context.Context, request operations.PostCommunicationPreferencesV3SubscribeSubscribeRequest) (*operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/communication-preferences/v3/subscribe"

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PublicSubscriptionStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PublicSubscriptionStatus = out
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

// PostCommunicationPreferencesV3UnsubscribeUnsubscribe - Unsubscribe a contact
// Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
func (s *Status) PostCommunicationPreferencesV3UnsubscribeUnsubscribe(ctx context.Context, request operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest) (*operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/communication-preferences/v3/unsubscribe"

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PublicSubscriptionStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PublicSubscriptionStatus = out
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
