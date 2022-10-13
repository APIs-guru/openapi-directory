package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetPaymentsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetPaymentsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetPaymentsSecurity struct {
	Option1 *GetPaymentsSecurityOption1 `security:"option"`
	Option2 *GetPaymentsSecurityOption2 `security:"option"`
}

type GetPaymentsRequest struct {
	QueryParams GetPaymentsQueryParams
	Security    GetPaymentsSecurity
}

type GetPayments200ApplicationJSON struct {
	Data    []shared.Payment `json:"data"`
	Page    *int64           `json:"page"`
	Pages   *int64           `json:"pages"`
	Results *int64           `json:"results"`
}

type GetPaymentsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetPaymentsResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetPayments200ApplicationJSONObject     *GetPayments200ApplicationJSON
	GetPaymentsDefaultApplicationJSONObject *GetPaymentsDefaultApplicationJSON
}
