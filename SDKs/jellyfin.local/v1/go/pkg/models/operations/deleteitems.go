package operations

import (
"openapi/pkg/models/shared")

type DeleteItemsQueryParams struct {
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    
}

type DeleteItemsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteItemsRequest struct {
    QueryParams DeleteItemsQueryParams 
    Security DeleteItemsSecurity 
    
}

type DeleteItemsResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

