package shared

// GoogleCloudRetailV2betaGcsSource
// Google Cloud Storage location for input content.
type GoogleCloudRetailV2betaGcsSource struct {
	DataSchema *string  `json:"dataSchema,omitempty"`
	InputUris  []string `json:"inputUris,omitempty"`
}
