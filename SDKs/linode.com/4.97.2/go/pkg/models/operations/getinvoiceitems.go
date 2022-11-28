package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoiceItemsPathParams struct {
	InvoiceID int64 `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetInvoiceItemsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetInvoiceItemsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetInvoiceItems200ApplicationJSON struct {
	Data    []shared.InvoiceItem `json:"data,omitempty"`
	Page    *int64               `json:"page,omitempty"`
	Pages   *int64               `json:"pages,omitempty"`
	Results *int64               `json:"results,omitempty"`
}

type GetInvoiceItemsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetInvoiceItemsRequest struct {
	PathParams  GetInvoiceItemsPathParams
	QueryParams GetInvoiceItemsQueryParams
	Security    GetInvoiceItemsSecurity
}

type GetInvoiceItemsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetInvoiceItems200ApplicationJSONObject     *GetInvoiceItems200ApplicationJSON
	GetInvoiceItemsDefaultApplicationJSONObject *GetInvoiceItemsDefaultApplicationJSON
}
