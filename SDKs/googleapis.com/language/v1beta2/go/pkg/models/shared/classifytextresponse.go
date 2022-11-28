package shared

// ClassifyTextResponse
// The document classification response message.
type ClassifyTextResponse struct {
	Categories []ClassificationCategory `json:"categories,omitempty"`
}
