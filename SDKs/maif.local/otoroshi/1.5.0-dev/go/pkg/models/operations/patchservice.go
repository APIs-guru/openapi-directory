package operations

import (
"openapi/pkg/models/shared")

type PatchServicePathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type PatchServiceSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PatchServiceRequest struct {
    PathParams PatchServicePathParams 
    Request []shared.Patch `request:"mediaType=application/json"`
    Security PatchServiceSecurity 
    
}

type PatchServiceResponse struct {
    ContentType string 
    Service *shared.Service 
    StatusCode int64 
    
}

