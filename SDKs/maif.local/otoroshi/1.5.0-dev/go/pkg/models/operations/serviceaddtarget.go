package operations

import (
"openapi/pkg/models/shared")

type ServiceAddTargetPathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type ServiceAddTargetSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ServiceAddTargetRequest struct {
    PathParams ServiceAddTargetPathParams 
    Request *shared.Target `request:"mediaType=application/json"`
    Security ServiceAddTargetSecurity 
    
}

type ServiceAddTargetResponse struct {
    ContentType string 
    StatusCode int64 
    Targets []shared.Target 
    
}

