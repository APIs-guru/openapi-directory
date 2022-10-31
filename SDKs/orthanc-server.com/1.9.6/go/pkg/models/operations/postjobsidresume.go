package operations



type PostJobsIDResumePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostJobsIDResumeRequest struct {
    PathParams PostJobsIDResumePathParams 
    
}

type PostJobsIDResumeResponse struct {
    ContentType string 
    PostJobsIDResume200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

