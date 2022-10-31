package operations

type DeleteConversationPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type DeleteConversationRequest struct {
	PathParams DeleteConversationPathParams
}

type DeleteConversationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DeleteConversation200ApplicationJSONObject map[string]interface{}
}
