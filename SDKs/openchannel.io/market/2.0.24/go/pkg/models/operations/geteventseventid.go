package operations



type GetEventsEventIDPathParams struct {
    EventID string `pathParam:"style=simple,explode=false,name=eventId"`
    
}

type GetEventsEventIDRequest struct {
    PathParams GetEventsEventIDPathParams 
    
}

type GetEventsEventIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

