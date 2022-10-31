package operations



type GetRealmUserStorageIDNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUserStorageIDNameRequest struct {
    PathParams GetRealmUserStorageIDNamePathParams 
    
}

type GetRealmUserStorageIDNameResponse struct {
    ContentType string 
    GetRealmUserStorageIDName2XxApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

