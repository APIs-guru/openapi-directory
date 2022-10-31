package operations

import (
"openapi/pkg/models/shared")

type CreateServiceSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateServiceRequest struct {
    Request *shared.Service `request:"mediaType=application/json"`
    Security CreateServiceSecurity 
    
}

type CreateServiceResponse struct {
    ContentType string 
    Service *shared.Service 
    StatusCode int64 
    
}

