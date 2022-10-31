package operations



type GetJobsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetJobsIDRequest struct {
    PathParams GetJobsIDPathParams 
    
}

type GetJobsIDResponse struct {
    ContentType string 
    GetJobsID200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

