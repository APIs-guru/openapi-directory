package shared

type GoogleCloudRetailV2GcsSource struct {
	DataSchema *string  `json:"dataSchema,omitempty"`
	InputUris  []string `json:"inputUris,omitempty"`
}
