package shared

// CloudRunMetadata
// CloudRunMetadata contains information from a Cloud Run deployment.
type CloudRunMetadata struct {
	Revision    *string  `json:"revision,omitempty"`
	Service     *string  `json:"service,omitempty"`
	ServiceUrls []string `json:"serviceUrls,omitempty"`
}
