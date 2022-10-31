package operations



type TraceDelayDelayPathParams struct {
    Delay int64 `pathParam:"style=simple,explode=false,name=delay"`
    
}

type TraceDelayDelayRequest struct {
    PathParams TraceDelayDelayPathParams 
    
}

type TraceDelayDelayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

