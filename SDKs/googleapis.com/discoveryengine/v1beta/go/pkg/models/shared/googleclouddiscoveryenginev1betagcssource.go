package shared

// GoogleCloudDiscoveryengineV1betaGcsSource
// Google Cloud Storage location for input content. format.
type GoogleCloudDiscoveryengineV1betaGcsSource struct {
	DataSchema *string  `json:"dataSchema,omitempty"`
	InputUris  []string `json:"inputUris,omitempty"`
}
