package operations

import (
"openapi/pkg/models/shared")

type ListProductsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ListProductsRequest struct {
    Security ListProductsSecurity 
    
}

type ListProductsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensings []interface{} 
    
}

