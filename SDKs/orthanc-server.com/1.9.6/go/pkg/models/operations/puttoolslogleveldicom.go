package operations



type PutToolsLogLevelDicomRequest struct {
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutToolsLogLevelDicomResponse struct {
    ContentType string 
    StatusCode int64 
    
}

