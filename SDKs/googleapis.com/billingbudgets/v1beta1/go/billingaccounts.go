package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type BillingAccounts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBillingAccounts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BillingAccounts {
	return &BillingAccounts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BillingbudgetsBillingAccountsBudgetsCreate - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
func (s *BillingAccounts) BillingbudgetsBillingAccountsBudgetsCreate(ctx context.Context, request operations.BillingbudgetsBillingAccountsBudgetsCreateRequest) (*operations.BillingbudgetsBillingAccountsBudgetsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/budgets", request.PathParams)

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BillingbudgetsBillingAccountsBudgetsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudBillingBudgetsV1beta1Budget
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudBillingBudgetsV1beta1Budget = out
		}
	}

	return res, nil
}

// BillingbudgetsBillingAccountsBudgetsDelete - Deletes a budget. Returns successfully if already deleted.
func (s *BillingAccounts) BillingbudgetsBillingAccountsBudgetsDelete(ctx context.Context, request operations.BillingbudgetsBillingAccountsBudgetsDeleteRequest) (*operations.BillingbudgetsBillingAccountsBudgetsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BillingbudgetsBillingAccountsBudgetsDeleteResponse{
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

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// BillingbudgetsBillingAccountsBudgetsGet - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
func (s *BillingAccounts) BillingbudgetsBillingAccountsBudgetsGet(ctx context.Context, request operations.BillingbudgetsBillingAccountsBudgetsGetRequest) (*operations.BillingbudgetsBillingAccountsBudgetsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BillingbudgetsBillingAccountsBudgetsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudBillingBudgetsV1beta1Budget
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudBillingBudgetsV1beta1Budget = out
		}
	}

	return res, nil
}

// BillingbudgetsBillingAccountsBudgetsList - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
func (s *BillingAccounts) BillingbudgetsBillingAccountsBudgetsList(ctx context.Context, request operations.BillingbudgetsBillingAccountsBudgetsListRequest) (*operations.BillingbudgetsBillingAccountsBudgetsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/budgets", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BillingbudgetsBillingAccountsBudgetsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse = out
		}
	}

	return res, nil
}

// BillingbudgetsBillingAccountsBudgetsPatch - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
func (s *BillingAccounts) BillingbudgetsBillingAccountsBudgetsPatch(ctx context.Context, request operations.BillingbudgetsBillingAccountsBudgetsPatchRequest) (*operations.BillingbudgetsBillingAccountsBudgetsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.BillingbudgetsBillingAccountsBudgetsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudBillingBudgetsV1beta1Budget
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudBillingBudgetsV1beta1Budget = out
		}
	}

	return res, nil
}
