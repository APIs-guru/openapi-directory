package operations

import (
"openapi/pkg/models/shared")

type GetIPsSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetIPsSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetIPsSecurity struct {
    Option1 *GetIPsSecurityOption1 `security:"option"`
    Option2 *GetIPsSecurityOption2 `security:"option"`
    
}

type GetIPsRequest struct {
    Security GetIPsSecurity 
    
}

type GetIPs200ApplicationJSON struct {
    Data []shared.IPAddress `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetIPsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetIPsResponse struct {
    ContentType string 
    StatusCode int64 
    GetIPs200ApplicationJSONObject *GetIPs200ApplicationJSON 
    GetIPsDefaultApplicationJSONObject *GetIPsDefaultApplicationJSON 
    
}

