package operations



type GetBadgeQueryParams struct {
    URL string `queryParam:"style=form,explode=true,name=url"`
    
}

type GetBadgeRequest struct {
    QueryParams GetBadgeQueryParams 
    
}

type GetBadgeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

