package operations



type PostJobsIDPausePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostJobsIDPauseRequest struct {
    PathParams PostJobsIDPausePathParams 
    
}

type PostJobsIDPauseResponse struct {
    ContentType string 
    PostJobsIDPause200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

