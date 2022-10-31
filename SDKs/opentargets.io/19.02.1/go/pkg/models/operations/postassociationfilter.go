package operations



type PostAssociationFilterRequest struct {
    Request string `request:"mediaType=application/json"`
    
}

type PostAssociationFilterResponse struct {
    ContentType string 
    StatusCode int64 
    
}

