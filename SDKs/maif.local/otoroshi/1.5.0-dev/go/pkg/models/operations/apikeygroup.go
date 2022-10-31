package operations

import (
"openapi/pkg/models/shared")

type APIKeyGroupPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type APIKeyGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type APIKeyGroupRequest struct {
    PathParams APIKeyGroupPathParams 
    Security APIKeyGroupSecurity 
    
}

type APIKeyGroupResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

