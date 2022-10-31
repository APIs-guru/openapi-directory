package operations

import (
"openapi/pkg/models/shared")

type LocationsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type LocationsRequest struct {
    Security LocationsSecurity 
    
}

type LocationsResponse struct {
    AccessDenied *interface{} 
    ContentType string 
    StatusCode int64 
    Locations *shared.Locations 
    
}

