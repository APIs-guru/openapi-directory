package operations

import (
"openapi/pkg/models/shared")

type DeleteLocationRulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteLocationRuleRequest struct {
    PathParams DeleteLocationRulePathParams 
    
}

type DeleteLocationRuleResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

