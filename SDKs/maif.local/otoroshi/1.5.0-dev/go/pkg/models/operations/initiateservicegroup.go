package operations

import (
"openapi/pkg/models/shared")

type InitiateServiceGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type InitiateServiceGroupRequest struct {
    Security InitiateServiceGroupSecurity 
    
}

type InitiateServiceGroupResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

