package operations



type GetRealmClientsIDSessionCountPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDSessionCountRequest struct {
    PathParams GetRealmClientsIDSessionCountPathParams 
    
}

type GetRealmClientsIDSessionCountResponse struct {
    ContentType string 
    GetRealmClientsIDSessionCount2XxApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

