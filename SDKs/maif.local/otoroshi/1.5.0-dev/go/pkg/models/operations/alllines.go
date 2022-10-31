package operations

import (
"openapi/pkg/models/shared")

type AllLinesSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type AllLinesRequest struct {
    Security AllLinesSecurity 
    
}

type AllLinesResponse struct {
    ContentType string 
    Environment *string 
    StatusCode int64 
    
}

