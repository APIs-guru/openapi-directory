package shared

// IngestMessageResponse
// Acknowledges that a message has been ingested into the specified HL7v2 store.
type IngestMessageResponse struct {
	Hl7Ack  *string  `json:"hl7Ack,omitempty"`
	Message *Message `json:"message,omitempty"`
}
