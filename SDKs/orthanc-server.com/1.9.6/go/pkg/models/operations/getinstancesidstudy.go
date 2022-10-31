package operations



type GetInstancesIDStudyPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDStudyQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    
}

type GetInstancesIDStudyRequest struct {
    PathParams GetInstancesIDStudyPathParams 
    QueryParams GetInstancesIDStudyQueryParams 
    
}

type GetInstancesIDStudyResponse struct {
    ContentType string 
    GetInstancesIDStudy200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

