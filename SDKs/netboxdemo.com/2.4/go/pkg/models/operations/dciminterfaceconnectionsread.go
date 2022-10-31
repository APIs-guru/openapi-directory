package operations

import (
"openapi/pkg/models/shared")

type DcimInterfaceConnectionsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimInterfaceConnectionsReadRequest struct {
    PathParams DcimInterfaceConnectionsReadPathParams 
    
}

type DcimInterfaceConnectionsReadResponse struct {
    ContentType string 
    InterfaceConnection *shared.InterfaceConnection 
    StatusCode int64 
    
}

