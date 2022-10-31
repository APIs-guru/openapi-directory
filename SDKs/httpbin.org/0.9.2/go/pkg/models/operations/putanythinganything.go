package operations



type PutAnythingAnythingPathParams struct {
    Anything string `pathParam:"style=simple,explode=false,name=anything"`
    
}

type PutAnythingAnythingRequest struct {
    PathParams PutAnythingAnythingPathParams 
    
}

type PutAnythingAnythingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

