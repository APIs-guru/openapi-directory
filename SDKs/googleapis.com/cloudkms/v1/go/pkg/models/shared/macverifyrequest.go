package shared

type MacVerifyRequest struct {
	Data       *string `json:"data"`
	DataCrc32c *string `json:"dataCrc32c"`
	Mac        *string `json:"mac"`
	MacCrc32c  *string `json:"macCrc32c"`
}
