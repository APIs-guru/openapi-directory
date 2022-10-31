package operations

import (
"openapi/pkg/models/shared")

type UpdateLinodeConfigPathParams struct {
    ConfigID int64 `pathParam:"style=simple,explode=false,name=configId"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type UpdateLinodeConfigSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateLinodeConfigSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateLinodeConfigSecurity struct {
    Option1 *UpdateLinodeConfigSecurityOption1 `security:"option"`
    Option2 *UpdateLinodeConfigSecurityOption2 `security:"option"`
    
}

type UpdateLinodeConfigRequest struct {
    PathParams UpdateLinodeConfigPathParams 
    Request interface{} `request:"mediaType=application/json"`
    Security UpdateLinodeConfigSecurity 
    
}

type UpdateLinodeConfigDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateLinodeConfigResponse struct {
    ContentType string 
    LinodeConfig *shared.LinodeConfig 
    StatusCode int64 
    UpdateLinodeConfigDefaultApplicationJSONObject *UpdateLinodeConfigDefaultApplicationJSON 
    
}

