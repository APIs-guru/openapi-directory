package operations



type UpdateMemberPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    
}

type UpdateMemberRequest struct {
    PathParams UpdateMemberPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type UpdateMemberResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateMember200ApplicationJSONAny *interface{} 
    
}

