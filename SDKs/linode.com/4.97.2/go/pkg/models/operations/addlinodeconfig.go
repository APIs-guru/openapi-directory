package operations

import (
"openapi/pkg/models/shared")

type AddLinodeConfigPathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type AddLinodeConfigSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type AddLinodeConfigSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddLinodeConfigSecurity struct {
    Option1 *AddLinodeConfigSecurityOption1 `security:"option"`
    Option2 *AddLinodeConfigSecurityOption2 `security:"option"`
    
}

type AddLinodeConfigRequest struct {
    PathParams AddLinodeConfigPathParams 
    Request shared.LinodeConfig `request:"mediaType=application/json"`
    Security AddLinodeConfigSecurity 
    
}

type AddLinodeConfigDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type AddLinodeConfigResponse struct {
    ContentType string 
    LinodeConfig *shared.LinodeConfig 
    StatusCode int64 
    AddLinodeConfigDefaultApplicationJSONObject *AddLinodeConfigDefaultApplicationJSON 
    
}

