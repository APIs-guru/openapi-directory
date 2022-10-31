package operations



type GetAnythingAnythingPathParams struct {
    Anything string `pathParam:"style=simple,explode=false,name=anything"`
    
}

type GetAnythingAnythingRequest struct {
    PathParams GetAnythingAnythingPathParams 
    
}

type GetAnythingAnythingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

