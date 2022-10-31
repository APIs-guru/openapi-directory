package operations



type PostToolsCreateDicomRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostToolsCreateDicomResponse struct {
    ContentType string 
    PostToolsCreateDicom200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

