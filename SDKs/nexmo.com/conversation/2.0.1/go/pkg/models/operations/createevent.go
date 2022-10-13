package operations

type CreateEventPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type CreateEventRequestBody struct {
	Body map[string]interface{} `json:"body"`
	From string                 `json:"from"`
	To   *string                `json:"to"`
	Type string                 `json:"type"`
}

type CreateEventRequest struct {
	PathParams CreateEventPathParams
	Request    *CreateEventRequestBody `request:"mediaType=application/json"`
}

type CreateEvent201ApplicationJSON struct {
	Href      *string `json:"href"`
	ID        *string `json:"id"`
	Timestamp *string `json:"timestamp"`
}

type CreateEventResponse struct {
	ContentType                         string
	StatusCode                          int64
	CreateEvent201ApplicationJSONObject *CreateEvent201ApplicationJSON
}
