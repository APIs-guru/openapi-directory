package operations

import (
"openapi/pkg/models/shared")

type GetItemByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetItemByIDRequest struct {
    PathParams GetItemByIDPathParams 
    
}

type GetItemByIDResponse struct {
    ContentType string 
    Item *shared.Item 
    StatusCode int64 
    
}

