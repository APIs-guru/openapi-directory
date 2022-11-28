package shared

// PublishBatchResponse
// Response for the PublishBatch method.
type PublishBatchResponse struct {
	MessageIds []string `json:"messageIds,omitempty"`
}
