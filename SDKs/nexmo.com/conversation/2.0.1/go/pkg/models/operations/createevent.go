package operations

type CreateEventPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

// CreateEventRequestBody
// Create New Event Request Payload Object
type CreateEventRequestBody struct {
	Body map[string]interface{} `json:"body,omitempty"`
	From string                 `json:"from"`
	To   *string                `json:"to,omitempty"`
	Type string                 `json:"type"`
}

// CreateEvent201ApplicationJSON
// Create New Event Response Payload Object
type CreateEvent201ApplicationJSON struct {
	Href      *string `json:"href,omitempty"`
	ID        *string `json:"id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

type CreateEventRequest struct {
	PathParams CreateEventPathParams
	Request    *CreateEventRequestBody `request:"mediaType=application/json"`
}

type CreateEventResponse struct {
	ContentType                         string
	StatusCode                          int64
	CreateEvent201ApplicationJSONObject *CreateEvent201ApplicationJSON
}
