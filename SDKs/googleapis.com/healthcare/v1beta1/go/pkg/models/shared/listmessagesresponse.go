package shared

// ListMessagesResponse
// Lists the messages in the specified HL7v2 store.
type ListMessagesResponse struct {
	Hl7V2Messages []Message `json:"hl7V2Messages,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
