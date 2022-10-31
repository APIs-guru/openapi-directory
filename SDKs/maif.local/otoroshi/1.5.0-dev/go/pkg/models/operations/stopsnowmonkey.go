package operations

import (
"openapi/pkg/models/shared")

type StopSnowMonkeySecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type StopSnowMonkeyRequest struct {
    Security StopSnowMonkeySecurity 
    
}

type StopSnowMonkeyResponse struct {
    ContentType string 
    Done *shared.Done 
    StatusCode int64 
    
}

