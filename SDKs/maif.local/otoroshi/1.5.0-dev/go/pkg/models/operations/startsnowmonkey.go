package operations

import (
"openapi/pkg/models/shared")

type StartSnowMonkeySecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type StartSnowMonkeyRequest struct {
    Security StartSnowMonkeySecurity 
    
}

type StartSnowMonkeyResponse struct {
    ContentType string 
    Done *shared.Done 
    StatusCode int64 
    
}

