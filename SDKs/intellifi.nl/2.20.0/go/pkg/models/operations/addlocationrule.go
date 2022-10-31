package operations

import (
"openapi/pkg/models/shared")

type AddLocationRuleRequest struct {
    Request shared.LocationRuleUpdate `request:"mediaType=application/json"`
    
}

type AddLocationRuleResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

