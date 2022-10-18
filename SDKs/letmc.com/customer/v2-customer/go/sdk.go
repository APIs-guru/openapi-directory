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

var Servers = []string{
	"https://live-api.letmc.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk.serverURL = serverURL
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		defaultClient:  http.DefaultClient,
		securityClient: http.DefaultClient,
	}
	for _, opt := range opts {
		opt(sdk)
	}
	if sdk.serverURL == "" {
		sdk.serverURL = Servers[0]
	}

	return sdk
}

func (s *SDK) BranchControllerGetBranches(ctx context.Context, request operations.BranchControllerGetBranchesRequest) (*operations.BranchControllerGetBranchesResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/branch/branches", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BranchControllerGetBranchesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BranchModelResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BranchModelResults = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.BranchModelResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BranchModelResults = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) GetV2CustomerShortNameBranchBranchesBranchID(ctx context.Context, request operations.GetV2CustomerShortNameBranchBranchesBranchIDRequest) (*operations.GetV2CustomerShortNameBranchBranchesBranchIDResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/branch/branches/{branchID}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV2CustomerShortNameBranchBranchesBranchIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BranchModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BranchModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.BranchModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BranchModel = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerCreateMaintenancePreference(ctx context.Context, request operations.LandlordControllerCreateMaintenancePreferenceRequest) (*operations.LandlordControllerCreateMaintenancePreferenceResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/tenancy/maintenance/preference", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerCreateMaintenancePreferenceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordControllerCreateMaintenancePreference200ApplicationJSONString = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordControllerCreateMaintenancePreference200TextJSONString = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetAccounts(ctx context.Context, request operations.LandlordControllerGetAccountsRequest) (*operations.LandlordControllerGetAccountsResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/accounting", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordAccountingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordAccountingModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordAccountingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordAccountingModel = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetDocument(ctx context.Context, request operations.LandlordControllerGetDocumentRequest) (*operations.LandlordControllerGetDocumentResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/document", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetDocumentResponse{
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

			res.Object = out
		case utils.MatchContentType(contentType, `text/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Object = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetInvetoryReport(ctx context.Context, request operations.LandlordControllerGetInvetoryReportRequest) (*operations.LandlordControllerGetInvetoryReportResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/inventory", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetInvetoryReportResponse{
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

			res.Object = out
		case utils.MatchContentType(contentType, `text/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Object = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetInvoice(ctx context.Context, request operations.LandlordControllerGetInvoiceRequest) (*operations.LandlordControllerGetInvoiceResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/invoice", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetInvoiceResponse{
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

			res.Object = out
		case utils.MatchContentType(contentType, `text/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Object = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetLandlordCrmEntries(ctx context.Context, request operations.LandlordControllerGetLandlordCrmEntriesRequest) (*operations.LandlordControllerGetLandlordCrmEntriesResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/landlordcrmentries", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetLandlordCrmEntriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.LandlordCrmEntry
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordCrmEntries = out
		case utils.MatchContentType(contentType, `text/json`):
			var out []shared.LandlordCrmEntry
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordCrmEntries = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetMaintenanceJobs(ctx context.Context, request operations.LandlordControllerGetMaintenanceJobsRequest) (*operations.LandlordControllerGetMaintenanceJobsResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/maintenance", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetMaintenanceJobsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordMaintenanceModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordMaintenanceModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordMaintenanceModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordMaintenanceModel = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetProfitLossReport(ctx context.Context, request operations.LandlordControllerGetProfitLossReportRequest) (*operations.LandlordControllerGetProfitLossReportResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/profitloss", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetProfitLossReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordProfitLossModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordProfitLossModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordProfitLossModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordProfitLossModel = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetRentArrears(ctx context.Context, request operations.LandlordControllerGetRentArrearsRequest) (*operations.LandlordControllerGetRentArrearsResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/rentarrears", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetRentArrearsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordRentArrearsModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordRentArrearsModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordRentArrearsModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordRentArrearsModel = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetSasReport(ctx context.Context, request operations.LandlordControllerGetSasReportRequest) (*operations.LandlordControllerGetSasReportResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/sas", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetSasReportResponse{
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

			res.Object = out
		case utils.MatchContentType(contentType, `text/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Object = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetSettings(ctx context.Context, request operations.LandlordControllerGetSettingsRequest) (*operations.LandlordControllerGetSettingsResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/settings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordSettingsModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordSettingsModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordSettingsModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordSettingsModel = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetSummaryDetails(ctx context.Context, request operations.LandlordControllerGetSummaryDetailsRequest) (*operations.LandlordControllerGetSummaryDetailsResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/summary", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetSummaryDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordSummaryModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordSummaryModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordSummaryModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordSummaryModel = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetTenancy(ctx context.Context, request operations.LandlordControllerGetTenancyRequest) (*operations.LandlordControllerGetTenancyResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/tenancy", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetTenancyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordTenancyModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordTenancyModel = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordTenancyModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordTenancyModel = out
		}
	}

	return res, nil
}

func (s *SDK) LandlordControllerGetTenancyAgreementReport(ctx context.Context, request operations.LandlordControllerGetTenancyAgreementReportRequest) (*operations.LandlordControllerGetTenancyAgreementReportResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/landlord/tenancyagreement", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LandlordControllerGetTenancyAgreementReportResponse{
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

			res.Object = out
		case utils.MatchContentType(contentType, `text/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Object = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) PhotoControllerGetPhotoDownload(ctx context.Context, request operations.PhotoControllerGetPhotoDownloadRequest) (*operations.PhotoControllerGetPhotoDownloadResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/photo/download", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PhotoControllerGetPhotoDownloadResponse{
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

			res.Object = out
		case utils.MatchContentType(contentType, `text/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Object = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) PropertyControllerGetPropertiesPhotos(ctx context.Context, request operations.PropertyControllerGetPropertiesPhotosRequest) (*operations.PropertyControllerGetPropertiesPhotosResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/property/{propertyID}/photos", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PropertyControllerGetPropertiesPhotosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LandlordPhotoModelResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordPhotoModelResults = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.LandlordPhotoModelResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LandlordPhotoModelResults = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	}

	return res, nil
}

func (s *SDK) SessionControllerChangePassword(ctx context.Context, request operations.SessionControllerChangePasswordRequest) (*operations.SessionControllerChangePasswordResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/session/password", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SessionControllerChangePasswordResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

func (s *SDK) SessionControllerCreateLandlordLogin(ctx context.Context, request operations.SessionControllerCreateLandlordLoginRequest) (*operations.SessionControllerCreateLandlordLoginResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/session/createlandlordlogin", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SessionControllerCreateLandlordLoginResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

func (s *SDK) SessionControllerGetSessionInfo(ctx context.Context, request operations.SessionControllerGetSessionInfoRequest) (*operations.SessionControllerGetSessionInfoResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/session", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SessionControllerGetSessionInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SessionControllerGetSessionInfo200ApplicationJSONString = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SessionControllerGetSessionInfo200TextJSONString = out
		}
	}

	return res, nil
}

func (s *SDK) SessionControllerLogin(ctx context.Context, request operations.SessionControllerLoginRequest) (*operations.SessionControllerLoginResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/session", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SessionControllerLoginResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SessionControllerLogin200ApplicationJSONString = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		case utils.MatchContentType(contentType, `text/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SessionControllerLogin200TextJSONString = out
		}
	}

	return res, nil
}

func (s *SDK) SessionControllerLogout(ctx context.Context, request operations.SessionControllerLogoutRequest) (*operations.SessionControllerLogoutResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/session", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SessionControllerLogoutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

func (s *SDK) SessionControllerResetPassword(ctx context.Context, request operations.SessionControllerResetPasswordRequest) (*operations.SessionControllerResetPasswordResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/customer/{shortName}/session/resetpassword", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SessionControllerResetPasswordResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}
