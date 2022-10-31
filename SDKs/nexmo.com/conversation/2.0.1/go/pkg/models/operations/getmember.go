package operations



type GetMemberPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    
}

type GetMemberRequest struct {
    PathParams GetMemberPathParams 
    
}

type GetMemberResponse struct {
    ContentType string 
    StatusCode int64 
    GetMember200ApplicationJSONAny *interface{} 
    
}

