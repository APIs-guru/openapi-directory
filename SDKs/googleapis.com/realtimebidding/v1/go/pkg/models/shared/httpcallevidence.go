package shared

// HTTPCallEvidence
// HTTP calls made by a creative that resulted in policy violations.
type HTTPCallEvidence struct {
	Urls []string `json:"urls,omitempty"`
}
