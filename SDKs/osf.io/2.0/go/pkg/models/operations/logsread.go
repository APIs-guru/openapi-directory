package operations



type LogsReadPathParams struct {
    LogID string `pathParam:"style=simple,explode=false,name=log_id"`
    
}

type LogsReadRequest struct {
    PathParams LogsReadPathParams 
    
}

type LogsReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

