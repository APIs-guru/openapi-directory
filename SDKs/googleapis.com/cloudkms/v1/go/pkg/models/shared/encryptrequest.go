package shared

type EncryptRequest struct {
	AdditionalAuthenticatedData       *string `json:"additionalAuthenticatedData"`
	AdditionalAuthenticatedDataCrc32c *string `json:"additionalAuthenticatedDataCrc32c"`
	Plaintext                         *string `json:"plaintext"`
	PlaintextCrc32c                   *string `json:"plaintextCrc32c"`
}
