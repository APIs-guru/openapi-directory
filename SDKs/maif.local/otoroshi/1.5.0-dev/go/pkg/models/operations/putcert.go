package operations

import (
"openapi/pkg/models/shared")

type PutCertPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutCertSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PutCertRequest struct {
    PathParams PutCertPathParams 
    Request *shared.Certificate `request:"mediaType=application/json"`
    Security PutCertSecurity 
    
}

type PutCertResponse struct {
    Certificate *shared.Certificate 
    ContentType string 
    StatusCode int64 
    
}

