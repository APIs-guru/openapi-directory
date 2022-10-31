package operations

import (
"openapi/pkg/models/shared")

type GetMembersPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type GetMembersRequest struct {
    PathParams GetMembersPathParams 
    
}

type GetMembers200ApplicationJSON struct {
    Name string `json:"name"`
    State shared.MemberStateEnum `json:"state"`
    UserID string `json:"user_id"`
    UserName string `json:"user_name"`
    
}

type GetMembersResponse struct {
    ContentType string 
    StatusCode int64 
    GetMembers200ApplicationJSONObjects []GetMembers200ApplicationJSON 
    
}

