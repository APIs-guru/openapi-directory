package shared

// AddSecretVersionRequest
// Request message for SecretManagerService.AddSecretVersion.
type AddSecretVersionRequest struct {
	Payload *SecretPayload `json:"payload,omitempty"`
}
