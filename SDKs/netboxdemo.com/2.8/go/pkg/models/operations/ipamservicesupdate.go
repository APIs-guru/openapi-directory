package operations

import (
"openapi/pkg/models/shared")

type IpamServicesUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamServicesUpdateRequest struct {
    PathParams IpamServicesUpdatePathParams 
    Request shared.WritableService `request:"mediaType=application/json"`
    
}

type IpamServicesUpdateResponse struct {
    ContentType string 
    Service *shared.Service 
    StatusCode int64 
    
}

