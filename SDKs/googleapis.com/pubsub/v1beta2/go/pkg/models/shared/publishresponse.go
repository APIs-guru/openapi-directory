package shared

// PublishResponse
// Response for the `Publish` method.
type PublishResponse struct {
	MessageIds []string `json:"messageIds,omitempty"`
}
