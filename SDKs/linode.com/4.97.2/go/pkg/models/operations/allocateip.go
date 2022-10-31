package operations

import (
"openapi/pkg/models/shared")

type AllocateIPSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type AllocateIPSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AllocateIPSecurity struct {
    Option1 *AllocateIPSecurityOption1 `security:"option"`
    Option2 *AllocateIPSecurityOption2 `security:"option"`
    
}

type AllocateIPRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    Security AllocateIPSecurity 
    
}

type AllocateIPDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type AllocateIPResponse struct {
    ContentType string 
    IPAddress *shared.IPAddress 
    StatusCode int64 
    AllocateIPDefaultApplicationJSONObject *AllocateIPDefaultApplicationJSON 
    
}

