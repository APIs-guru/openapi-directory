package operations



type GetResourcesMediaIDContentPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesMediaIDContentQueryParams struct {
    CalledByBuild *bool `queryParam:"style=form,explode=false,name=calledByBuild"`
    
}

type GetResourcesMediaIDContentRequest struct {
    PathParams GetResourcesMediaIDContentPathParams 
    QueryParams GetResourcesMediaIDContentQueryParams 
    
}

type GetResourcesMediaIDContentResponse struct {
    ContentType string 
    GetResourcesMediaIDContent200ApplicationJSONString *string 
    StatusCode int64 
    
}

