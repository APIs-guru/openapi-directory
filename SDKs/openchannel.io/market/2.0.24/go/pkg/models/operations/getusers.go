package operations



type GetUsersQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    PageNumber *int64 `queryParam:"style=form,explode=true,name=pageNumber"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetUsersRequest struct {
    QueryParams GetUsersQueryParams 
    
}

type GetUsersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

