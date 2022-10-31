package operations



type PostRealmClientsIDNodesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientsIDNodesRequest struct {
    PathParams PostRealmClientsIDNodesPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostRealmClientsIDNodesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

