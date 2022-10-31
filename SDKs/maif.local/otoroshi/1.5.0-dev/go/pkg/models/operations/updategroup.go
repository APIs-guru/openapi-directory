package operations

import (
"openapi/pkg/models/shared")

type UpdateGroupPathParams struct {
    ServiceGroupID string `pathParam:"style=simple,explode=false,name=serviceGroupId"`
    
}

type UpdateGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateGroupRequest struct {
    PathParams UpdateGroupPathParams 
    Request *shared.Group `request:"mediaType=application/json"`
    Security UpdateGroupSecurity 
    
}

type UpdateGroupResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

