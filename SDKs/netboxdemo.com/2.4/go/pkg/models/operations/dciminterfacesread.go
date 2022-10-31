package operations

import (
"openapi/pkg/models/shared")

type DcimInterfacesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimInterfacesReadRequest struct {
    PathParams DcimInterfacesReadPathParams 
    
}

type DcimInterfacesReadResponse struct {
    ContentType string 
    Interface *shared.Interface 
    StatusCode int64 
    
}

