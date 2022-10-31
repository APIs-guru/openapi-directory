package operations

import (
"openapi/pkg/models/shared")

type AllServicesSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type AllServicesRequest struct {
    Security AllServicesSecurity 
    
}

type AllServicesResponse struct {
    ContentType string 
    Services []shared.Service 
    StatusCode int64 
    
}

