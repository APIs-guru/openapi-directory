package operations

import (
"openapi/pkg/models/shared")

type LicenseTypesSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type LicenseTypesRequest struct {
    Security LicenseTypesSecurity 
    
}

type LicenseTypesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

