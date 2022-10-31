package operations



type PutToolsLogLevelLuaRequest struct {
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutToolsLogLevelLuaResponse struct {
    ContentType string 
    StatusCode int64 
    
}

