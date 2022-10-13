package shared

type AsymmetricDecryptRequest struct {
	Ciphertext       *string `json:"ciphertext"`
	CiphertextCrc32c *string `json:"ciphertextCrc32c"`
}
