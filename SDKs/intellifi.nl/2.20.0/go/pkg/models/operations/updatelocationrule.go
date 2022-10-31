package operations

import (
"openapi/pkg/models/shared")

type UpdateLocationRulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateLocationRuleRequest struct {
    PathParams UpdateLocationRulePathParams 
    Request shared.LocationRuleUpdate `request:"mediaType=application/json"`
    
}

type UpdateLocationRuleResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

