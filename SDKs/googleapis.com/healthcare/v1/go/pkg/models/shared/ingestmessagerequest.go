package shared

type IngestMessageRequest struct {
	Message *Message `json:"message,omitempty"`
}
