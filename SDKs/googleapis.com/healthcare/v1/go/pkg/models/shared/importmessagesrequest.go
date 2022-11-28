package shared

// ImportMessagesRequest
// Request to import messages.
type ImportMessagesRequest struct {
	GcsSource *GcsSource `json:"gcsSource,omitempty"`
}
