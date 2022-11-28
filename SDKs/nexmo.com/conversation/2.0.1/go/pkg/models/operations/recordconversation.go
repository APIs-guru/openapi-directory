package operations

import (
	"openapi/pkg/models/shared"
)

var RecordConversationServerList = []string{
	"https://api.nexmo.com/v1",
}

type RecordConversationPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type RecordConversationRequestBody struct {
	Action      shared.ActionEnum  `json:"action"`
	EventMethod *string            `json:"event_method,omitempty"`
	EventURL    []string           `json:"event_url,omitempty"`
	Format      *shared.FormatEnum `json:"format,omitempty"`
	Split       *string            `json:"split,omitempty"`
}

type RecordConversationRequest struct {
	ServerURL  *string
	PathParams RecordConversationPathParams
	Request    *RecordConversationRequestBody `request:"mediaType=application/json"`
}

type RecordConversationResponse struct {
	ContentType string
	StatusCode  int64
}
