package shared



type GenerateRandomBytesResponse struct {
    Data *string `json:"data,omitempty"`
    DataCrc32c *string `json:"dataCrc32c,omitempty"`
    
}

