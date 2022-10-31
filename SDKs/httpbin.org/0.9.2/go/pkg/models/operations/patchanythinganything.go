package operations



type PatchAnythingAnythingPathParams struct {
    Anything string `pathParam:"style=simple,explode=false,name=anything"`
    
}

type PatchAnythingAnythingRequest struct {
    PathParams PatchAnythingAnythingPathParams 
    
}

type PatchAnythingAnythingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

