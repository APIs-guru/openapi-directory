package shared

// IngestMessageRequestInput
// Ingests a message into the specified HL7v2 store.
type IngestMessageRequestInput struct {
	Message *MessageInput `json:"message,omitempty"`
}
