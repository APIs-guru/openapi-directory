package operations

import (
"openapi/pkg/models/shared")

type DcimInterfaceConnectionsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimInterfaceConnectionsUpdateRequest struct {
    PathParams DcimInterfaceConnectionsUpdatePathParams 
    Request shared.WritableInterfaceConnection `request:"mediaType=application/json"`
    
}

type DcimInterfaceConnectionsUpdateResponse struct {
    ContentType string 
    InterfaceConnection *shared.InterfaceConnection 
    StatusCode int64 
    
}

