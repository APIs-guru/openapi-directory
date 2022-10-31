package operations

import (
"openapi/pkg/models/shared")

type DeleteServicePathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type DeleteServiceSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteServiceRequest struct {
    PathParams DeleteServicePathParams 
    Security DeleteServiceSecurity 
    
}

type DeleteServiceResponse struct {
    ContentType string 
    Deleted *shared.Deleted 
    StatusCode int64 
    
}

