package operations



type PostJobsIDResubmitPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostJobsIDResubmitRequest struct {
    PathParams PostJobsIDResubmitPathParams 
    
}

type PostJobsIDResubmitResponse struct {
    ContentType string 
    PostJobsIDResubmit200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

