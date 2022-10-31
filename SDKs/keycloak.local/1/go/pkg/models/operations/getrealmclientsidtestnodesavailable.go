package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDTestNodesAvailablePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDTestNodesAvailableRequest struct {
    PathParams GetRealmClientsIDTestNodesAvailablePathParams 
    
}

type GetRealmClientsIDTestNodesAvailableResponse struct {
    ContentType string 
    GlobalRequestResult *shared.GlobalRequestResult 
    StatusCode int64 
    
}

