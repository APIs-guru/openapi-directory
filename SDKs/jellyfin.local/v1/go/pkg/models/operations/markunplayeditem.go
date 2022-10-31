package operations

import (
"openapi/pkg/models/shared")

type MarkUnplayedItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type MarkUnplayedItemSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type MarkUnplayedItemRequest struct {
    PathParams MarkUnplayedItemPathParams 
    Security MarkUnplayedItemSecurity 
    
}

type MarkUnplayedItemResponse struct {
    ContentType string 
    StatusCode int64 
    UserItemDataDto *shared.UserItemDataDto 
    
}

