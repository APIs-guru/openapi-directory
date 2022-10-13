package shared

type GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata struct {
	DocumentAllowMultipleLabels *bool `json:"documentAllowMultipleLabels"`
	DocumentSplitter            *bool `json:"documentSplitter"`
	PrefixedNamingOnProperties  *bool `json:"prefixedNamingOnProperties"`
	SkipNamingValidation        *bool `json:"skipNamingValidation"`
}
