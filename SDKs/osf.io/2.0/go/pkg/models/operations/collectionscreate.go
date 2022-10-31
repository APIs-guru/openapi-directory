package operations



type CollectionsCreateRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CollectionsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

