package shared

// MacSignRequest
// Request message for KeyManagementService.MacSign.
type MacSignRequest struct {
	Data       *string `json:"data,omitempty"`
	DataCrc32c *string `json:"dataCrc32c,omitempty"`
}
