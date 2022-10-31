package operations



type GetStatusQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetStatusRequest struct {
    QueryParams GetStatusQueryParams 
    
}

type GetStatusResponse struct {
    ContentType string 
    StatusCode int64 
    GetStatusResponse map[string]interface{} 
    
}

