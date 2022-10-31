package operations



type GetStudiesIDInstancesTagsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDInstancesTagsQueryParams struct {
    IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetStudiesIDInstancesTagsRequest struct {
    PathParams GetStudiesIDInstancesTagsPathParams 
    QueryParams GetStudiesIDInstancesTagsQueryParams 
    
}

type GetStudiesIDInstancesTagsResponse struct {
    ContentType string 
    GetStudiesIDInstancesTags200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

