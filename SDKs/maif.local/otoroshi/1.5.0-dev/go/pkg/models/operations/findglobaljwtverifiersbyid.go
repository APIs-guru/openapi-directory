package operations

import (
"openapi/pkg/models/shared")

type FindGlobalJwtVerifiersByIDPathParams struct {
    VerifierID string `pathParam:"style=simple,explode=false,name=verifierId"`
    
}

type FindGlobalJwtVerifiersByIDSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FindGlobalJwtVerifiersByIDRequest struct {
    PathParams FindGlobalJwtVerifiersByIDPathParams 
    Security FindGlobalJwtVerifiersByIDSecurity 
    
}

type FindGlobalJwtVerifiersByIDResponse struct {
    ContentType string 
    GlobalJwtVerifier *shared.GlobalJwtVerifier 
    StatusCode int64 
    
}

