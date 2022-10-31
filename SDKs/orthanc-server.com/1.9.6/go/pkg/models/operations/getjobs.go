package operations



type GetJobsQueryParams struct {
    Expand *string `queryParam:"style=form,explode=true,name=expand"`
    
}

type GetJobsRequest struct {
    QueryParams GetJobsQueryParams 
    
}

type GetJobsResponse struct {
    ContentType string 
    GetJobs200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

