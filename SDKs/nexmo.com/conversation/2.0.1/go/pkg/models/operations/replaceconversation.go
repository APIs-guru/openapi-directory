package operations

import (
	"openapi/pkg/models/shared"
)

type ReplaceConversationPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type ReplaceConversationRequestBody struct {
	DisplayName *string                        `json:"display_name"`
	ImageURL    *string                        `json:"image_url"`
	Name        *string                        `json:"name"`
	Properties  *shared.ConversationProperties `json:"properties"`
}

type ReplaceConversationRequest struct {
	PathParams ReplaceConversationPathParams
	Request    *ReplaceConversationRequestBody `request:"mediaType=application/json"`
}

type ReplaceConversation200ApplicationJSON struct {
	Href string `json:"href"`
	ID   string `json:"id"`
}

type ReplaceConversationResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ReplaceConversation200ApplicationJSONObject *ReplaceConversation200ApplicationJSON
}
