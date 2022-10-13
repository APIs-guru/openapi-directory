package shared

type DecryptRequest struct {
	AdditionalAuthenticatedData       *string `json:"additionalAuthenticatedData"`
	AdditionalAuthenticatedDataCrc32c *string `json:"additionalAuthenticatedDataCrc32c"`
	Ciphertext                        *string `json:"ciphertext"`
	CiphertextCrc32c                  *string `json:"ciphertextCrc32c"`
}
