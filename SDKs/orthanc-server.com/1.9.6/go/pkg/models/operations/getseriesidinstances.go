package operations



type GetSeriesIDInstancesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDInstancesQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    
}

type GetSeriesIDInstancesRequest struct {
    PathParams GetSeriesIDInstancesPathParams 
    QueryParams GetSeriesIDInstancesQueryParams 
    
}

type GetSeriesIDInstancesResponse struct {
    ContentType string 
    GetSeriesIDInstances200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

