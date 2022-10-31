package operations



type PutToolsLogLevelGenericRequest struct {
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutToolsLogLevelGenericResponse struct {
    ContentType string 
    StatusCode int64 
    
}

