package operations

import (
	"openapi/pkg/models/shared"
)

type ReplaceConversationPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type ReplaceConversationRequestBody struct {
	DisplayName *string                        `json:"display_name,omitempty"`
	ImageURL    *string                        `json:"image_url,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	Properties  *shared.ConversationProperties `json:"properties,omitempty"`
}

type ReplaceConversation200ApplicationJSON struct {
	Href string `json:"href"`
	ID   string `json:"id"`
}

type ReplaceConversationRequest struct {
	PathParams ReplaceConversationPathParams
	Request    *ReplaceConversationRequestBody `request:"mediaType=application/json"`
}

type ReplaceConversationResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ReplaceConversation200ApplicationJSONObject *ReplaceConversation200ApplicationJSON
}
