package operations



type TraceAnythingAnythingPathParams struct {
    Anything string `pathParam:"style=simple,explode=false,name=anything"`
    
}

type TraceAnythingAnythingRequest struct {
    PathParams TraceAnythingAnythingPathParams 
    
}

type TraceAnythingAnythingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

