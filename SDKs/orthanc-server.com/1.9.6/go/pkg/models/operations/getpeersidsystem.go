package operations



type GetPeersIDSystemPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPeersIDSystemRequest struct {
    PathParams GetPeersIDSystemPathParams 
    
}

type GetPeersIDSystemResponse struct {
    ContentType string 
    GetPeersIDSystem200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

