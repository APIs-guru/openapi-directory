package shared

// DeidentifyConfig
// Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
type DeidentifyConfig struct {
	Annotation        *AnnotationConfig            `json:"annotation,omitempty"`
	Dicom             *DicomConfig                 `json:"dicom,omitempty"`
	DicomTagConfig    *DicomTagConfig              `json:"dicomTagConfig,omitempty"`
	Fhir              *FhirConfig                  `json:"fhir,omitempty"`
	FhirFieldConfig   *FhirFieldConfig             `json:"fhirFieldConfig,omitempty"`
	Image             *ImageConfig                 `json:"image,omitempty"`
	OperationMetadata *DeidentifyOperationMetadata `json:"operationMetadata,omitempty"`
	Text              *TextConfig                  `json:"text,omitempty"`
}
