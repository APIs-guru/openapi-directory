package shared

type GenerateRandomBytesResponse struct {
	Data       *string `json:"data"`
	DataCrc32c *string `json:"dataCrc32c"`
}
