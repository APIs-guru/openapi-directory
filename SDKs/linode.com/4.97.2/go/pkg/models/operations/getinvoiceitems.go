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

type GetInvoiceItemsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetInvoiceItemsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetInvoiceItemsSecurity struct {
	Option1 *GetInvoiceItemsSecurityOption1 `security:"option"`
	Option2 *GetInvoiceItemsSecurityOption2 `security:"option"`
}

type GetInvoiceItemsRequest struct {
	PathParams  GetInvoiceItemsPathParams
	QueryParams GetInvoiceItemsQueryParams
	Security    GetInvoiceItemsSecurity
}

type GetInvoiceItems200ApplicationJSON struct {
	Data    []shared.InvoiceItem `json:"data"`
	Page    *int64               `json:"page"`
	Pages   *int64               `json:"pages"`
	Results *int64               `json:"results"`
}

type GetInvoiceItemsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetInvoiceItemsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetInvoiceItems200ApplicationJSONObject     *GetInvoiceItems200ApplicationJSON
	GetInvoiceItemsDefaultApplicationJSONObject *GetInvoiceItemsDefaultApplicationJSON
}
