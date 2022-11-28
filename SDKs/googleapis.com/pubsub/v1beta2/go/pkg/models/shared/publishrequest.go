package shared

// PublishRequest
// Request for the Publish method.
type PublishRequest struct {
	Messages []PubsubMessage `json:"messages,omitempty"`
}
