package operations

import (
"openapi/pkg/models/shared")

type GetAccountLoginsSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountLoginsSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetAccountLoginsSecurity struct {
    Option1 *GetAccountLoginsSecurityOption1 `security:"option"`
    Option2 *GetAccountLoginsSecurityOption2 `security:"option"`
    
}

type GetAccountLoginsRequest struct {
    Security GetAccountLoginsSecurity 
    
}

type GetAccountLogins200ApplicationJSON struct {
    Data []shared.Login `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetAccountLoginsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetAccountLoginsResponse struct {
    ContentType string 
    StatusCode int64 
    GetAccountLogins200ApplicationJSONObject *GetAccountLogins200ApplicationJSON 
    GetAccountLoginsDefaultApplicationJSONObject *GetAccountLoginsDefaultApplicationJSON 
    
}

