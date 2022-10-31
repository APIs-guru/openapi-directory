package operations

import (
"openapi/pkg/models/shared")

type VirtualizationInterfacesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationInterfacesPartialUpdateRequest struct {
    PathParams VirtualizationInterfacesPartialUpdatePathParams 
    Request shared.WritableInterface `request:"mediaType=application/json"`
    
}

type VirtualizationInterfacesPartialUpdateResponse struct {
    ContentType string 
    Interface *shared.Interface 
    StatusCode int64 
    
}

