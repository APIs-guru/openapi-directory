package operations

import (
"openapi/pkg/models/shared")

type GetInvoicesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetInvoicesSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetInvoicesSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetInvoicesSecurity struct {
    Option1 *GetInvoicesSecurityOption1 `security:"option"`
    Option2 *GetInvoicesSecurityOption2 `security:"option"`
    
}

type GetInvoicesRequest struct {
    QueryParams GetInvoicesQueryParams 
    Security GetInvoicesSecurity 
    
}

type GetInvoices200ApplicationJSON struct {
    Data []shared.Invoice `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetInvoicesDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetInvoicesResponse struct {
    ContentType string 
    StatusCode int64 
    GetInvoices200ApplicationJSONObject *GetInvoices200ApplicationJSON 
    GetInvoicesDefaultApplicationJSONObject *GetInvoicesDefaultApplicationJSON 
    
}

