package shared

type CloudRunMetadata struct {
	Revision    *string  `json:"revision"`
	Service     *string  `json:"service"`
	ServiceUrls []string `json:"serviceUrls"`
}
