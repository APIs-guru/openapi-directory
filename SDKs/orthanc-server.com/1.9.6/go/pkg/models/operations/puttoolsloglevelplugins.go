package operations



type PutToolsLogLevelPluginsRequest struct {
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutToolsLogLevelPluginsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

