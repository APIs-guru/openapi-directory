package shared

// AsymmetricDecryptRequest
// Request message for KeyManagementService.AsymmetricDecrypt.
type AsymmetricDecryptRequest struct {
	Ciphertext       *string `json:"ciphertext,omitempty"`
	CiphertextCrc32c *string `json:"ciphertextCrc32c,omitempty"`
}
