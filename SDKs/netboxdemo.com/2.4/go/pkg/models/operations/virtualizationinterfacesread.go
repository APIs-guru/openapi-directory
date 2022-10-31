package operations

import (
"openapi/pkg/models/shared")

type VirtualizationInterfacesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationInterfacesReadRequest struct {
    PathParams VirtualizationInterfacesReadPathParams 
    
}

type VirtualizationInterfacesReadResponse struct {
    ContentType string 
    Interface *shared.Interface 
    StatusCode int64 
    
}

