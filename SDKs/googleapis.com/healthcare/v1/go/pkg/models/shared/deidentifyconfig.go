package shared

// DeidentifyConfig
// Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
type DeidentifyConfig struct {
	Dicom *DicomConfig `json:"dicom,omitempty"`
	Fhir  *FhirConfig  `json:"fhir,omitempty"`
	Image *ImageConfig `json:"image,omitempty"`
	Text  *TextConfig  `json:"text,omitempty"`
}
