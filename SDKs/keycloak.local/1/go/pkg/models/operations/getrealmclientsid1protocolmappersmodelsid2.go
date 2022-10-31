package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsId1ProtocolMappersModelsId2PathParams struct {
    Id1 string `pathParam:"style=simple,explode=false,name=id1"`
    Id2 string `pathParam:"style=simple,explode=false,name=id2"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsId1ProtocolMappersModelsId2Request struct {
    PathParams GetRealmClientsId1ProtocolMappersModelsId2PathParams 
    
}

type GetRealmClientsId1ProtocolMappersModelsId2Response struct {
    ContentType string 
    ProtocolMapperRepresentation *shared.ProtocolMapperRepresentation 
    StatusCode int64 
    
}

