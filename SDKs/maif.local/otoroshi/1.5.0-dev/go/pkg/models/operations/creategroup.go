package operations

import (
"openapi/pkg/models/shared")

type CreateGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateGroupRequest struct {
    Request *shared.Group `request:"mediaType=application/json"`
    Security CreateGroupSecurity 
    
}

type CreateGroupResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

