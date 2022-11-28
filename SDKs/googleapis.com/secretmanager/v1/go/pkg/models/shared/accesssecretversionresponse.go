package shared

// AccessSecretVersionResponse
// Response message for SecretManagerService.AccessSecretVersion.
type AccessSecretVersionResponse struct {
	Name    *string        `json:"name,omitempty"`
	Payload *SecretPayload `json:"payload,omitempty"`
}
