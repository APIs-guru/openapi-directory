package operations

import (
"openapi/pkg/models/shared")

type ResetSnowMonkeySecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ResetSnowMonkeyRequest struct {
    Security ResetSnowMonkeySecurity 
    
}

type ResetSnowMonkeyResponse struct {
    ContentType string 
    Done *shared.Done 
    StatusCode int64 
    
}

