package operations

import (
"openapi/pkg/models/shared")

type DeleteItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type DeleteItemSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteItemRequest struct {
    PathParams DeleteItemPathParams 
    Security DeleteItemSecurity 
    
}

type DeleteItemResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

