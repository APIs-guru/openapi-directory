package shared

// Secret
// Secret provides a reference to entries in Secret Manager.
type Secret struct {
	SecretVersion *string `json:"secretVersion,omitempty"`
}
