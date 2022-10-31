package shared



type DecryptRequest struct {
    AdditionalAuthenticatedData *string `json:"additionalAuthenticatedData,omitempty"`
    AdditionalAuthenticatedDataCrc32c *string `json:"additionalAuthenticatedDataCrc32c,omitempty"`
    Ciphertext *string `json:"ciphertext,omitempty"`
    CiphertextCrc32c *string `json:"ciphertextCrc32c,omitempty"`
    
}

