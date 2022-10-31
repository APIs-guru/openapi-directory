package operations

import (
"openapi/pkg/models/shared")

type GetLinodeConfigPathParams struct {
    ConfigID int64 `pathParam:"style=simple,explode=false,name=configId"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type GetLinodeConfigSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetLinodeConfigSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetLinodeConfigSecurity struct {
    Option1 *GetLinodeConfigSecurityOption1 `security:"option"`
    Option2 *GetLinodeConfigSecurityOption2 `security:"option"`
    
}

type GetLinodeConfigRequest struct {
    PathParams GetLinodeConfigPathParams 
    Security GetLinodeConfigSecurity 
    
}

type GetLinodeConfigDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetLinodeConfigResponse struct {
    ContentType string 
    LinodeConfig *shared.LinodeConfig 
    StatusCode int64 
    GetLinodeConfigDefaultApplicationJSONObject *GetLinodeConfigDefaultApplicationJSON 
    
}

