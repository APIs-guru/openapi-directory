package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

var ServerList = []string{
	"https://api.nowpayments.io",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// ThreeGetEstimatedPrice - 3. Get estimated price
// This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
// Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.
func (s *SDK) ThreeGetEstimatedPrice(ctx context.Context, request operations.ThreeGetEstimatedPriceRequest) (*operations.ThreeGetEstimatedPriceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/estimate"

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

	res := &operations.ThreeGetEstimatedPriceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ThreeGetEstimatedPrice200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ThreeGetEstimatedPrice200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SixGetTheMinimumPaymentAmount - 6. Get the minimum payment amount
// Get the minimum payment amount for a specific pair.
//
// You can provide both currencies in the pair or just currency_from, and we will calculate the minimum payment amount for currency_from and currency which you have specified as the outcome in the Store Settings.
//
// In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.
func (s *SDK) SixGetTheMinimumPaymentAmount(ctx context.Context, request operations.SixGetTheMinimumPaymentAmountRequest) (*operations.SixGetTheMinimumPaymentAmountResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/min-amount"

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

	res := &operations.SixGetTheMinimumPaymentAmountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SixGetTheMinimumPaymentAmount200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SixGetTheMinimumPaymentAmount200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SevenGetListOfPayments - 7. Get list of payments
// Returns the entire list of all transactions, created with certain API key.
// The list of optional parameters:
// - limit - number of records in one page. (possible values: from 1 to 500)
// - page - the page number you want to get (possible values: from 0 to **page count - 1**)
// - sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
// - orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
// - dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
// - dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
func (s *SDK) SevenGetListOfPayments(ctx context.Context, request operations.SevenGetListOfPaymentsRequest) (*operations.SevenGetListOfPaymentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/payment/"

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

	res := &operations.SevenGetListOfPaymentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SevenGetListOfPayments200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SevenGetListOfPayments200ApplicationJSONObject = out
		}
	}

	return res, nil
}
