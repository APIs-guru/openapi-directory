package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoicePathParams struct {
	InvoiceID int64 `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetInvoiceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetInvoiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetInvoiceRequest struct {
	PathParams GetInvoicePathParams
	Security   GetInvoiceSecurity
}

type GetInvoiceResponse struct {
	ContentType                            string
	Invoice                                *shared.Invoice
	StatusCode                             int64
	GetInvoiceDefaultApplicationJSONObject *GetInvoiceDefaultApplicationJSON
}
