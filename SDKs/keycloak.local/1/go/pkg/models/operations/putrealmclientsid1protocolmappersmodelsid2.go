package operations

import (
"openapi/pkg/models/shared")

type PutRealmClientsId1ProtocolMappersModelsId2PathParams struct {
    Id1 string `pathParam:"style=simple,explode=false,name=id1"`
    Id2 string `pathParam:"style=simple,explode=false,name=id2"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmClientsId1ProtocolMappersModelsId2Request struct {
    PathParams PutRealmClientsId1ProtocolMappersModelsId2PathParams 
    Request shared.ProtocolMapperRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmClientsId1ProtocolMappersModelsId2Response struct {
    ContentType string 
    StatusCode int64 
    
}

