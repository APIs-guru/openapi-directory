package operations

import (
"openapi/pkg/models/shared")

type EnableAccountMangedSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type EnableAccountMangedSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type EnableAccountMangedSecurity struct {
    Option1 *EnableAccountMangedSecurityOption1 `security:"option"`
    Option2 *EnableAccountMangedSecurityOption2 `security:"option"`
    
}

type EnableAccountMangedRequest struct {
    Security EnableAccountMangedSecurity 
    
}

type EnableAccountMangedDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type EnableAccountMangedResponse struct {
    ContentType string 
    StatusCode int64 
    EnableAccountManged200ApplicationJSONObject map[string]interface{} 
    EnableAccountMangedDefaultApplicationJSONObject *EnableAccountMangedDefaultApplicationJSON 
    
}

