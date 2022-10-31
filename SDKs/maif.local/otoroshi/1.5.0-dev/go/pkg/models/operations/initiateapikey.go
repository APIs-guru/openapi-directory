package operations

import (
"openapi/pkg/models/shared")

type InitiateAPIKeySecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type InitiateAPIKeyRequest struct {
    Security InitiateAPIKeySecurity 
    
}

type InitiateAPIKeyResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

