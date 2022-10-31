package operations

import (
"openapi/pkg/models/shared")

type IpamServicesCreateRequest struct {
    Request shared.WritableService `request:"mediaType=application/json"`
    
}

type IpamServicesCreateResponse struct {
    ContentType string 
    Service *shared.Service 
    StatusCode int64 
    
}

