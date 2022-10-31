package operations



type PostToolsCreateArchiveRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostToolsCreateArchiveResponse struct {
    Body []byte 
    ContentType string 
    PostToolsCreateArchive200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

