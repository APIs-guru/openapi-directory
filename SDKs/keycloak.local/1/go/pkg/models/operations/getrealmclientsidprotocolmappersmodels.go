package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDProtocolMappersModelsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDProtocolMappersModelsRequest struct {
    PathParams GetRealmClientsIDProtocolMappersModelsPathParams 
    
}

type GetRealmClientsIDProtocolMappersModelsResponse struct {
    ContentType string 
    ProtocolMapperRepresentations []shared.ProtocolMapperRepresentation 
    StatusCode int64 
    
}

