package shared



type CreateCallResponse struct {
    ConversationUUID *string `json:"conversation_uuid,omitempty"`
    Direction *DirectionEnum `json:"direction,omitempty"`
    Status *string `json:"status,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

