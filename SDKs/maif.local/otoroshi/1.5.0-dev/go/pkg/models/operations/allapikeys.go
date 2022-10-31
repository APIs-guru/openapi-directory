package operations

import (
"openapi/pkg/models/shared")

type AllAPIKeysSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type AllAPIKeysRequest struct {
    Security AllAPIKeysSecurity 
    
}

type AllAPIKeysResponse struct {
    APIKeys []shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

