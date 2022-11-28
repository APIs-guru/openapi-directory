package shared

// Topic
// A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret.
type Topic struct {
	Name *string `json:"name,omitempty"`
}
