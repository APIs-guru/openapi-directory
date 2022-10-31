package operations



type PutToolsMetricsRequest struct {
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutToolsMetricsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

