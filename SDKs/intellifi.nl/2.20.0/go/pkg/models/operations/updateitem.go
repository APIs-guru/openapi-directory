package operations

import (
"openapi/pkg/models/shared")

type UpdateItemPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateItemRequest struct {
    PathParams UpdateItemPathParams 
    Request shared.ItemUpdate `request:"mediaType=application/json"`
    
}

type UpdateItemResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

