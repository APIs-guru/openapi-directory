package operations

import (
"openapi/pkg/models/shared")

type AddItemIdsListPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AddItemIdsListRequest struct {
    PathParams AddItemIdsListPathParams 
    Request []string `request:"mediaType=application/json"`
    
}

type AddItemIdsListResponse struct {
    ContentType string 
    ResponseListResource *shared.ResponseListResource 
    StatusCode int64 
    
}

