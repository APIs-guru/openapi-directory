package shared

type GoogleCloudRetailV2GcsSource struct {
	DataSchema *string  `json:"dataSchema"`
	InputUris  []string `json:"inputUris"`
}
