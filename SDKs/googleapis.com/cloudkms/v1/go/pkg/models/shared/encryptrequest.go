package shared



type EncryptRequest struct {
    AdditionalAuthenticatedData *string `json:"additionalAuthenticatedData,omitempty"`
    AdditionalAuthenticatedDataCrc32c *string `json:"additionalAuthenticatedDataCrc32c,omitempty"`
    Plaintext *string `json:"plaintext,omitempty"`
    PlaintextCrc32c *string `json:"plaintextCrc32c,omitempty"`
    
}

