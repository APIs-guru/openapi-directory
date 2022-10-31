package operations

import (
"openapi/pkg/models/shared")

type AuthorizeQueryParams struct {
    Code string `queryParam:"style=form,explode=true,name=code"`
    
}

type AuthorizeSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type AuthorizeRequest struct {
    QueryParams AuthorizeQueryParams 
    Security AuthorizeSecurity 
    
}

type AuthorizeResponse struct {
    Authorize200ApplicationJSONBoolean *bool 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

