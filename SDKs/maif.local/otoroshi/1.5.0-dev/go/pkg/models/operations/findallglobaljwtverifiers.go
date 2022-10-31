package operations

import (
"openapi/pkg/models/shared")

type FindAllGlobalJwtVerifiersSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FindAllGlobalJwtVerifiersRequest struct {
    Security FindAllGlobalJwtVerifiersSecurity 
    
}

type FindAllGlobalJwtVerifiersResponse struct {
    ContentType string 
    GlobalJwtVerifiers []shared.GlobalJwtVerifier 
    StatusCode int64 
    
}

