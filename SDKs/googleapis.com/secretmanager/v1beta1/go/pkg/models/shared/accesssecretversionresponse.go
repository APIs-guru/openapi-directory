package shared

type AccessSecretVersionResponse struct {
	Name    *string        `json:"name"`
	Payload *SecretPayload `json:"payload"`
}
