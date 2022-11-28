package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConversationRequestBody struct {
	DisplayName *string                        `json:"display_name,omitempty"`
	ImageURL    *string                        `json:"image_url,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	Properties  *shared.ConversationProperties `json:"properties,omitempty"`
}

type CreateConversation200ApplicationJSON struct {
	Href string `json:"href"`
	ID   string `json:"id"`
}

type CreateConversationRequest struct {
	Request *CreateConversationRequestBody `request:"mediaType=application/json"`
}

type CreateConversationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	CreateConversation200ApplicationJSONObject *CreateConversation200ApplicationJSON
}
