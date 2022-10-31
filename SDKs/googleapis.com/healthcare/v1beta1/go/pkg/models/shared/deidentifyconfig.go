package shared

type DeidentifyConfig struct {
	Annotation        *AnnotationConfig            `json:"annotation,omitempty"`
	Dicom             *DicomConfig                 `json:"dicom,omitempty"`
	Fhir              *FhirConfig                  `json:"fhir,omitempty"`
	Image             *ImageConfig                 `json:"image,omitempty"`
	OperationMetadata *DeidentifyOperationMetadata `json:"operationMetadata,omitempty"`
	Text              *TextConfig                  `json:"text,omitempty"`
}
