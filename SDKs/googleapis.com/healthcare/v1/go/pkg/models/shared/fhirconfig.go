package shared

type FhirConfig struct {
	DefaultKeepExtensions *bool           `json:"defaultKeepExtensions,omitempty"`
	FieldMetadataList     []FieldMetadata `json:"fieldMetadataList,omitempty"`
}
