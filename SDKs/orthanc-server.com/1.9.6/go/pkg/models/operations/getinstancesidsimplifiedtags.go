package operations



type GetInstancesIDSimplifiedTagsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDSimplifiedTagsQueryParams struct {
    IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
    
}

type GetInstancesIDSimplifiedTagsRequest struct {
    PathParams GetInstancesIDSimplifiedTagsPathParams 
    QueryParams GetInstancesIDSimplifiedTagsQueryParams 
    
}

type GetInstancesIDSimplifiedTagsResponse struct {
    ContentType string 
    GetInstancesIDSimplifiedTags200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

