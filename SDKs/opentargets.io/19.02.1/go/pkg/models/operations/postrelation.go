package operations



type PostRelationRequest struct {
    Request string `request:"mediaType=application/json"`
    
}

type PostRelationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

