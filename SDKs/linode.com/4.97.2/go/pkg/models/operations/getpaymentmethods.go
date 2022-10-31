package operations

import (
"openapi/pkg/models/shared")
var GetPaymentMethodsServers = []string{
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
}

type GetPaymentMethodsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetPaymentMethodsSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetPaymentMethodsSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetPaymentMethodsSecurity struct {
    Option1 *GetPaymentMethodsSecurityOption1 `security:"option"`
    Option2 *GetPaymentMethodsSecurityOption2 `security:"option"`
    
}

type GetPaymentMethodsRequest struct {
    ServerURL *string 
    QueryParams GetPaymentMethodsQueryParams 
    Security GetPaymentMethodsSecurity 
    
}

type GetPaymentMethods200ApplicationJSON struct {
    Data []shared.PaymentMethod `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetPaymentMethodsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetPaymentMethodsResponse struct {
    ContentType string 
    StatusCode int64 
    GetPaymentMethods200ApplicationJSONObject *GetPaymentMethods200ApplicationJSON 
    GetPaymentMethodsDefaultApplicationJSONObject *GetPaymentMethodsDefaultApplicationJSON 
    
}

