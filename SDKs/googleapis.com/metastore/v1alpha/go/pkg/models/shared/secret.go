package shared

// Secret
// A securely stored value.
type Secret struct {
	CloudSecret *string `json:"cloudSecret,omitempty"`
}
