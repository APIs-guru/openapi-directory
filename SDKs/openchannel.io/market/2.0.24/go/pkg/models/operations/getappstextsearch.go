package operations



type GetAppsTextSearchQueryParams struct {
    Fields string `queryParam:"style=form,explode=true,name=fields"`
    IsOwned *bool `queryParam:"style=form,explode=true,name=isOwned"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    PageNumber *int64 `queryParam:"style=form,explode=true,name=pageNumber"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Text string `queryParam:"style=form,explode=true,name=text"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetAppsTextSearchRequest struct {
    QueryParams GetAppsTextSearchQueryParams 
    
}

type GetAppsTextSearchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

