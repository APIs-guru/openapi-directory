package shared

// MacVerifyRequest
// Request message for KeyManagementService.MacVerify.
type MacVerifyRequest struct {
	Data       *string `json:"data,omitempty"`
	DataCrc32c *string `json:"dataCrc32c,omitempty"`
	Mac        *string `json:"mac,omitempty"`
	MacCrc32c  *string `json:"macCrc32c,omitempty"`
}
