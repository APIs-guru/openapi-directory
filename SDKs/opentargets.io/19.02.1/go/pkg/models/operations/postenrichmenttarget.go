package operations



type PostEnrichmentTargetRequest struct {
    Request string `request:"mediaType=application/json"`
    
}

type PostEnrichmentTargetResponse struct {
    ContentType string 
    StatusCode int64 
    
}

