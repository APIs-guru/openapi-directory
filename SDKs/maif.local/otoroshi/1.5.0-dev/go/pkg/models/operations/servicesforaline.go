package operations

import (
"openapi/pkg/models/shared")

type ServicesForALinePathParams struct {
    Line string `pathParam:"style=simple,explode=false,name=line"`
    
}

type ServicesForALineSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ServicesForALineRequest struct {
    PathParams ServicesForALinePathParams 
    Security ServicesForALineSecurity 
    
}

type ServicesForALineResponse struct {
    ContentType string 
    Services []shared.Service 
    StatusCode int64 
    
}

