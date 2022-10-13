package shared

type FhirConfig struct {
	DefaultKeepExtensions *bool           `json:"defaultKeepExtensions"`
	FieldMetadataList     []FieldMetadata `json:"fieldMetadataList"`
}
