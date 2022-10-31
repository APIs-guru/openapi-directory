package operations

import (
"openapi/pkg/models/shared")

type CreateNodeBalancerConfigPathParams struct {
    NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
    
}

type CreateNodeBalancerConfigSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateNodeBalancerConfigSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateNodeBalancerConfigSecurity struct {
    Option1 *CreateNodeBalancerConfigSecurityOption1 `security:"option"`
    Option2 *CreateNodeBalancerConfigSecurityOption2 `security:"option"`
    
}

type CreateNodeBalancerConfigRequest struct {
    PathParams CreateNodeBalancerConfigPathParams 
    Request *shared.NodeBalancerConfig `request:"mediaType=application/json"`
    Security CreateNodeBalancerConfigSecurity 
    
}

type CreateNodeBalancerConfigDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateNodeBalancerConfigResponse struct {
    ContentType string 
    NodeBalancerConfig *shared.NodeBalancerConfig 
    StatusCode int64 
    CreateNodeBalancerConfigDefaultApplicationJSONObject *CreateNodeBalancerConfigDefaultApplicationJSON 
    
}

