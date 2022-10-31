package operations



type DeleteMemberPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    
}

type DeleteMemberRequest struct {
    PathParams DeleteMemberPathParams 
    
}

type DeleteMemberResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteMember200ApplicationJSONObject map[string]interface{} 
    
}

