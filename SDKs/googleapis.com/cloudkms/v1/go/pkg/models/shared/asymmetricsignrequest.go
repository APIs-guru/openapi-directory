package shared

// AsymmetricSignRequest
// Request message for KeyManagementService.AsymmetricSign.
type AsymmetricSignRequest struct {
	Data         *string `json:"data,omitempty"`
	DataCrc32c   *string `json:"dataCrc32c,omitempty"`
	Digest       *Digest `json:"digest,omitempty"`
	DigestCrc32c *string `json:"digestCrc32c,omitempty"`
}
