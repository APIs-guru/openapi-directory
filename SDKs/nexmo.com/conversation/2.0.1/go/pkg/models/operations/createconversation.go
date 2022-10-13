package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConversationRequestBody struct {
	DisplayName *string                        `json:"display_name"`
	ImageURL    *string                        `json:"image_url"`
	Name        *string                        `json:"name"`
	Properties  *shared.ConversationProperties `json:"properties"`
}

type CreateConversationRequest struct {
	Request *CreateConversationRequestBody `request:"mediaType=application/json"`
}

type CreateConversation200ApplicationJSON struct {
	Href string `json:"href"`
	ID   string `json:"id"`
}

type CreateConversationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	CreateConversation200ApplicationJSONObject *CreateConversation200ApplicationJSON
}
