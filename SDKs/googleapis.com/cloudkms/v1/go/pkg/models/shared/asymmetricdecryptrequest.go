package shared



type AsymmetricDecryptRequest struct {
    Ciphertext *string `json:"ciphertext,omitempty"`
    CiphertextCrc32c *string `json:"ciphertextCrc32c,omitempty"`
    
}

