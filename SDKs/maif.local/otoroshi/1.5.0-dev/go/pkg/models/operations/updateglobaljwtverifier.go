package operations

import (
"openapi/pkg/models/shared")

type UpdateGlobalJwtVerifierPathParams struct {
    VerifierID string `pathParam:"style=simple,explode=false,name=verifierId"`
    
}

type UpdateGlobalJwtVerifierSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateGlobalJwtVerifierRequest struct {
    PathParams UpdateGlobalJwtVerifierPathParams 
    Request *shared.GlobalJwtVerifier `request:"mediaType=application/json"`
    Security UpdateGlobalJwtVerifierSecurity 
    
}

type UpdateGlobalJwtVerifierResponse struct {
    ContentType string 
    GlobalJwtVerifier *shared.GlobalJwtVerifier 
    StatusCode int64 
    
}

