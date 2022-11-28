package shared

// SecretPayload
// A secret payload resource in the Secret Manager API. This contains the sensitive secret data that is associated with a SecretVersion.
type SecretPayload struct {
	Data *string `json:"data,omitempty"`
}
