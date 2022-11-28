package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoicesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetInvoicesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetInvoices200ApplicationJSON struct {
	Data    []shared.Invoice `json:"data,omitempty"`
	Page    *int64           `json:"page,omitempty"`
	Pages   *int64           `json:"pages,omitempty"`
	Results *int64           `json:"results,omitempty"`
}

type GetInvoicesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetInvoicesRequest struct {
	QueryParams GetInvoicesQueryParams
	Security    GetInvoicesSecurity
}

type GetInvoicesResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetInvoices200ApplicationJSONObject     *GetInvoices200ApplicationJSON
	GetInvoicesDefaultApplicationJSONObject *GetInvoicesDefaultApplicationJSON
}
