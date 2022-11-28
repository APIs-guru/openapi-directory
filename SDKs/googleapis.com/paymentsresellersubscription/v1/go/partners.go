package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Partners struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPartners(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Partners {
	return &Partners{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PaymentsresellersubscriptionPartnersProductsList - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
func (s *Partners) PaymentsresellersubscriptionPartnersProductsList(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersProductsListRequest) (*operations.PaymentsresellersubscriptionPartnersProductsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/products", request.PathParams)

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

	res := &operations.PaymentsresellersubscriptionPartnersProductsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersPromotionsFindEligible - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
func (s *Partners) PaymentsresellersubscriptionPartnersPromotionsFindEligible(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest) (*operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/promotions:findEligible", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersPromotionsList - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
func (s *Partners) PaymentsresellersubscriptionPartnersPromotionsList(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersPromotionsListRequest) (*operations.PaymentsresellersubscriptionPartnersPromotionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/promotions", request.PathParams)

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

	res := &operations.PaymentsresellersubscriptionPartnersPromotionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersSubscriptionsCancel - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
func (s *Partners) PaymentsresellersubscriptionPartnersSubscriptionsCancel(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest) (*operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:cancel", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersSubscriptionsCreate - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
func (s *Partners) PaymentsresellersubscriptionPartnersSubscriptionsCreate(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest) (*operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/subscriptions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1Subscription = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersSubscriptionsEntitle - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
func (s *Partners) PaymentsresellersubscriptionPartnersSubscriptionsEntitle(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest) (*operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:entitle", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersSubscriptionsExtend - Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
func (s *Partners) PaymentsresellersubscriptionPartnersSubscriptionsExtend(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest) (*operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:extend", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersSubscriptionsGet - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
func (s *Partners) PaymentsresellersubscriptionPartnersSubscriptionsGet(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest) (*operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1Subscription = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersSubscriptionsProvision - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
func (s *Partners) PaymentsresellersubscriptionPartnersSubscriptionsProvision(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest) (*operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/subscriptions:provision", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1Subscription = out
		}
	}

	return res, nil
}

// PaymentsresellersubscriptionPartnersSubscriptionsUndoCancel - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
func (s *Partners) PaymentsresellersubscriptionPartnersSubscriptionsUndoCancel(ctx context.Context, request operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest) (*operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:undoCancel", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse = out
		}
	}

	return res, nil
}
