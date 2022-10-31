package operations



type ResetFactorsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type ResetFactorsRequest struct {
    PathParams ResetFactorsPathParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    
}

type ResetFactorsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

