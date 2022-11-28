package shared

// FhirConfig
// Specifies how to handle de-identification of a FHIR store.
type FhirConfig struct {
	DefaultKeepExtensions *bool           `json:"defaultKeepExtensions,omitempty"`
	FieldMetadataList     []FieldMetadata `json:"fieldMetadataList,omitempty"`
}
