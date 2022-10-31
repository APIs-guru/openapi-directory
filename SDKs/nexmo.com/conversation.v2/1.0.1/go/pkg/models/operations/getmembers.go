package operations

import (
"openapi/pkg/models/shared")

type GetMembersPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type GetMembersQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Order *shared.OrderEnum `queryParam:"style=form,explode=true,name=order"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetMembersRequest struct {
    PathParams GetMembersPathParams 
    QueryParams GetMembersQueryParams 
    
}

type GetMembersResponse struct {
    ContentType string 
    StatusCode int64 
    GetMembers200ApplicationJSONAny *interface{} 
    
}

