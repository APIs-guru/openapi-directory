package operations



type GetActionResourceSearchQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderBy *string `queryParam:"style=form,explode=true,name=order_by"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    
}

type GetActionResourceSearchRequest struct {
    QueryParams GetActionResourceSearchQueryParams 
    
}

type GetActionResourceSearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

