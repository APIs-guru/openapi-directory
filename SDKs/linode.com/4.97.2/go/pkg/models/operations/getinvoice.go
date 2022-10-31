package operations

import (
"openapi/pkg/models/shared")

type GetInvoicePathParams struct {
    InvoiceID int64 `pathParam:"style=simple,explode=false,name=invoiceId"`
    
}

type GetInvoiceSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetInvoiceSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetInvoiceSecurity struct {
    Option1 *GetInvoiceSecurityOption1 `security:"option"`
    Option2 *GetInvoiceSecurityOption2 `security:"option"`
    
}

type GetInvoiceRequest struct {
    PathParams GetInvoicePathParams 
    Security GetInvoiceSecurity 
    
}

type GetInvoiceDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetInvoiceResponse struct {
    ContentType string 
    Invoice *shared.Invoice 
    StatusCode int64 
    GetInvoiceDefaultApplicationJSONObject *GetInvoiceDefaultApplicationJSON 
    
}

