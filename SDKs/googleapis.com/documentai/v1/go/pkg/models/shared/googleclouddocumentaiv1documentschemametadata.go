package shared

type GoogleCloudDocumentaiV1DocumentSchemaMetadata struct {
	DocumentAllowMultipleLabels *bool `json:"documentAllowMultipleLabels"`
	DocumentSplitter            *bool `json:"documentSplitter"`
	PrefixedNamingOnProperties  *bool `json:"prefixedNamingOnProperties"`
	SkipNamingValidation        *bool `json:"skipNamingValidation"`
}
