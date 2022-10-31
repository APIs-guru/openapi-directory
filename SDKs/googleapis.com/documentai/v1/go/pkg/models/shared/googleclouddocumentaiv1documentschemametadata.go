package shared

type GoogleCloudDocumentaiV1DocumentSchemaMetadata struct {
	DocumentAllowMultipleLabels *bool `json:"documentAllowMultipleLabels,omitempty"`
	DocumentSplitter            *bool `json:"documentSplitter,omitempty"`
	PrefixedNamingOnProperties  *bool `json:"prefixedNamingOnProperties,omitempty"`
	SkipNamingValidation        *bool `json:"skipNamingValidation,omitempty"`
}
