package operations



type GetTargetExpressionByEnsgidQueryParams struct {
    Gene string `queryParam:"style=form,explode=true,name=gene"`
    
}

type GetTargetExpressionByEnsgidRequest struct {
    QueryParams GetTargetExpressionByEnsgidQueryParams 
    
}

type GetTargetExpressionByEnsgidResponse struct {
    ContentType string 
    StatusCode int64 
    
}

