package operations

import (
"openapi/pkg/models/shared")

type AddItemListRequest struct {
    Request shared.ItemList `request:"mediaType=application/json"`
    
}

type AddItemListResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

