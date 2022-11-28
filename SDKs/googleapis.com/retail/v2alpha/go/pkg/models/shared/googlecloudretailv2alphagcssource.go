package shared

// GoogleCloudRetailV2alphaGcsSource
// Google Cloud Storage location for input content.
type GoogleCloudRetailV2alphaGcsSource struct {
	DataSchema *string  `json:"dataSchema,omitempty"`
	InputUris  []string `json:"inputUris,omitempty"`
}
