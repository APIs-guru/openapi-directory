package shared

// GoogleCloudRetailV2GcsSource
// Google Cloud Storage location for input content.
type GoogleCloudRetailV2GcsSource struct {
	DataSchema *string  `json:"dataSchema,omitempty"`
	InputUris  []string `json:"inputUris,omitempty"`
}
