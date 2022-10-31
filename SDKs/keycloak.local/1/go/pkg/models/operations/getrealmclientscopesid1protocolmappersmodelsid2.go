package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientScopesId1ProtocolMappersModelsId2PathParams struct {
    Id1 string `pathParam:"style=simple,explode=false,name=id1"`
    Id2 string `pathParam:"style=simple,explode=false,name=id2"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientScopesId1ProtocolMappersModelsId2Request struct {
    PathParams GetRealmClientScopesId1ProtocolMappersModelsId2PathParams 
    
}

type GetRealmClientScopesId1ProtocolMappersModelsId2Response struct {
    ContentType string 
    ProtocolMapperRepresentation *shared.ProtocolMapperRepresentation 
    StatusCode int64 
    
}

