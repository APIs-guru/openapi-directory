package operations

import (
"openapi/pkg/models/shared")

type UpdateNodeBalancerPathParams struct {
    NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
    
}

type UpdateNodeBalancerSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateNodeBalancerSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateNodeBalancerSecurity struct {
    Option1 *UpdateNodeBalancerSecurityOption1 `security:"option"`
    Option2 *UpdateNodeBalancerSecurityOption2 `security:"option"`
    
}

type UpdateNodeBalancerRequest struct {
    PathParams UpdateNodeBalancerPathParams 
    Request shared.NodeBalancer `request:"mediaType=application/json"`
    Security UpdateNodeBalancerSecurity 
    
}

type UpdateNodeBalancerDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateNodeBalancerResponse struct {
    ContentType string 
    NodeBalancer *shared.NodeBalancer 
    StatusCode int64 
    UpdateNodeBalancerDefaultApplicationJSONObject *UpdateNodeBalancerDefaultApplicationJSON 
    
}

