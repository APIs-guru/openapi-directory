package operations

import (
"openapi/pkg/models/shared")

type ResolutionsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ResolutionsRequest struct {
    Security ResolutionsSecurity 
    
}

type ResolutionsResponse struct {
    AccessDenied *interface{} 
    ContentType string 
    StatusCode int64 
    Resolutions *interface{} 
    
}

