package operations



type PutToolsDefaultEncodingRequest struct {
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutToolsDefaultEncodingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

