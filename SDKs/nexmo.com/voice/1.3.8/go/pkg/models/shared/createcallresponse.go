package shared

type CreateCallResponse struct {
	ConversationUUID *string        `json:"conversation_uuid"`
	Direction        *DirectionEnum `json:"direction"`
	Status           *string        `json:"status"`
	UUID             *string        `json:"uuid"`
}
