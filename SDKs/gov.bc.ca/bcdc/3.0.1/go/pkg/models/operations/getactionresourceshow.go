package operations



type GetActionResourceShowQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    IncludeTracking *bool `queryParam:"style=form,explode=true,name=include_tracking"`
    
}

type GetActionResourceShowRequest struct {
    QueryParams GetActionResourceShowQueryParams 
    
}

type GetActionResourceShowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

