package operations



type TestnetGetStatusQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    
}

type TestnetGetStatusRequest struct {
    QueryParams TestnetGetStatusQueryParams 
    
}

type TestnetGetStatusResponse struct {
    ContentType string 
    StatusCode int64 
    GetStatusResponse map[string]interface{} 
    
}

