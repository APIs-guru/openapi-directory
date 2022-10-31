package operations

import (
"openapi/pkg/models/shared")

type DeleteGlobalJwtVerifierPathParams struct {
    VerifierID string `pathParam:"style=simple,explode=false,name=verifierId"`
    
}

type DeleteGlobalJwtVerifierSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteGlobalJwtVerifierRequest struct {
    PathParams DeleteGlobalJwtVerifierPathParams 
    Security DeleteGlobalJwtVerifierSecurity 
    
}

type DeleteGlobalJwtVerifierResponse struct {
    ContentType string 
    Deleted *shared.Deleted 
    StatusCode int64 
    
}

