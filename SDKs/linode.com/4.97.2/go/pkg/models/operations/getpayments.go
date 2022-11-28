package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetPaymentsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetPayments200ApplicationJSON struct {
	Data    []shared.Payment `json:"data,omitempty"`
	Page    *int64           `json:"page,omitempty"`
	Pages   *int64           `json:"pages,omitempty"`
	Results *int64           `json:"results,omitempty"`
}

type GetPaymentsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetPaymentsRequest struct {
	QueryParams GetPaymentsQueryParams
	Security    GetPaymentsSecurity
}

type GetPaymentsResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetPayments200ApplicationJSONObject     *GetPayments200ApplicationJSON
	GetPaymentsDefaultApplicationJSONObject *GetPaymentsDefaultApplicationJSON
}
