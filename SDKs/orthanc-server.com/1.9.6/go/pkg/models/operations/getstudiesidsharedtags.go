package operations



type GetStudiesIDSharedTagsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudiesIDSharedTagsQueryParams struct {
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetStudiesIDSharedTagsRequest struct {
    PathParams GetStudiesIDSharedTagsPathParams 
    QueryParams GetStudiesIDSharedTagsQueryParams 
    
}

type GetStudiesIDSharedTagsResponse struct {
    ContentType string 
    GetStudiesIDSharedTags200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

