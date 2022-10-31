package operations

import (
"openapi/pkg/models/shared")

type OneCertPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OneCertSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type OneCertRequest struct {
    PathParams OneCertPathParams 
    Security OneCertSecurity 
    
}

type OneCertResponse struct {
    Certificate *shared.Certificate 
    ContentType string 
    StatusCode int64 
    
}

