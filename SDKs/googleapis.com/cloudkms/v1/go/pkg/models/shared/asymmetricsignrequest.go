package shared

type AsymmetricSignRequest struct {
	Data         *string `json:"data"`
	DataCrc32c   *string `json:"dataCrc32c"`
	Digest       *Digest `json:"digest"`
	DigestCrc32c *string `json:"digestCrc32c"`
}
