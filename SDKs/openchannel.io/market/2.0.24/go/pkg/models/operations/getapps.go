package operations



type GetAppsQueryParams struct {
    IsOwner *bool `queryParam:"style=form,explode=true,name=isOwner"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    PageNumber *int64 `queryParam:"style=form,explode=true,name=pageNumber"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetAppsRequest struct {
    QueryParams GetAppsQueryParams 
    
}

type GetAppsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

