package operations



type DeleteRealmClientsId1ProtocolMappersModelsId2PathParams struct {
    Id1 string `pathParam:"style=simple,explode=false,name=id1"`
    Id2 string `pathParam:"style=simple,explode=false,name=id2"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmClientsId1ProtocolMappersModelsId2Request struct {
    PathParams DeleteRealmClientsId1ProtocolMappersModelsId2PathParams 
    
}

type DeleteRealmClientsId1ProtocolMappersModelsId2Response struct {
    ContentType string 
    StatusCode int64 
    
}

