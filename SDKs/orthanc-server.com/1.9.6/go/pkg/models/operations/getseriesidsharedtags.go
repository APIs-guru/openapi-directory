package operations



type GetSeriesIDSharedTagsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDSharedTagsQueryParams struct {
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetSeriesIDSharedTagsRequest struct {
    PathParams GetSeriesIDSharedTagsPathParams 
    QueryParams GetSeriesIDSharedTagsQueryParams 
    
}

type GetSeriesIDSharedTagsResponse struct {
    ContentType string 
    GetSeriesIDSharedTags200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

