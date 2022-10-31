package operations

import (
"openapi/pkg/models/shared")

type AllCertsSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type AllCertsRequest struct {
    Security AllCertsSecurity 
    
}

type AllCertsResponse struct {
    Certificates []shared.Certificate 
    ContentType string 
    StatusCode int64 
    
}

