package operations



type GetSeriesIDInstancesTagsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDInstancesTagsQueryParams struct {
    IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetSeriesIDInstancesTagsRequest struct {
    PathParams GetSeriesIDInstancesTagsPathParams 
    QueryParams GetSeriesIDInstancesTagsQueryParams 
    
}

type GetSeriesIDInstancesTagsResponse struct {
    ContentType string 
    GetSeriesIDInstancesTags200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

