package operations



type PostToolsFindRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostToolsFindResponse struct {
    ContentType string 
    PostToolsFind200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

