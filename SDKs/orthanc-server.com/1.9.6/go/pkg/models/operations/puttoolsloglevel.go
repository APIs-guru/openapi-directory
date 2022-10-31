package operations



type PutToolsLogLevelRequest struct {
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutToolsLogLevelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

