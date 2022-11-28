package shared

// GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata
// Metadata for global schema behavior.
type GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata struct {
	DocumentAllowMultipleLabels *bool `json:"documentAllowMultipleLabels,omitempty"`
	DocumentSplitter            *bool `json:"documentSplitter,omitempty"`
	PrefixedNamingOnProperties  *bool `json:"prefixedNamingOnProperties,omitempty"`
	SkipNamingValidation        *bool `json:"skipNamingValidation,omitempty"`
}
