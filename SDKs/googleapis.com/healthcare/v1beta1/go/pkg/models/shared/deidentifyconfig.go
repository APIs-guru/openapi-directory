package shared

type DeidentifyConfig struct {
	Annotation        *AnnotationConfig            `json:"annotation"`
	Dicom             *DicomConfig                 `json:"dicom"`
	Fhir              *FhirConfig                  `json:"fhir"`
	Image             *ImageConfig                 `json:"image"`
	OperationMetadata *DeidentifyOperationMetadata `json:"operationMetadata"`
	Text              *TextConfig                  `json:"text"`
}
