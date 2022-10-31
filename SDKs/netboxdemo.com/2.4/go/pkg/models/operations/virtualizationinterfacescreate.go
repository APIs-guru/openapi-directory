package operations

import (
"openapi/pkg/models/shared")

type VirtualizationInterfacesCreateRequest struct {
    Request shared.WritableInterface `request:"mediaType=application/json"`
    
}

type VirtualizationInterfacesCreateResponse struct {
    ContentType string 
    Interface *shared.Interface 
    StatusCode int64 
    
}

