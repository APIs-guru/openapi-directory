package shared

// GenerateRandomBytesResponse
// Response message for KeyManagementService.GenerateRandomBytes.
type GenerateRandomBytesResponse struct {
	Data       *string `json:"data,omitempty"`
	DataCrc32c *string `json:"dataCrc32c,omitempty"`
}
