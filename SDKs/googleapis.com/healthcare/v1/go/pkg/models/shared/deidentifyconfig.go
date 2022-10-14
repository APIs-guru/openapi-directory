package shared

type DeidentifyConfig struct {
	Dicom *DicomConfig `json:"dicom,omitempty"`
	Fhir  *FhirConfig  `json:"fhir,omitempty"`
	Image *ImageConfig `json:"image,omitempty"`
	Text  *TextConfig  `json:"text,omitempty"`
}
