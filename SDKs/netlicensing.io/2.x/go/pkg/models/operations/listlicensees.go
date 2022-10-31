package operations

import (
"openapi/pkg/models/shared")

type ListLicenseesSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ListLicenseesRequest struct {
    Security ListLicenseesSecurity 
    
}

type ListLicenseesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensings []interface{} 
    
}

