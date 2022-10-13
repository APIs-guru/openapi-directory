package shared

type DeidentifyConfig struct {
	Dicom *DicomConfig `json:"dicom"`
	Fhir  *FhirConfig  `json:"fhir"`
	Image *ImageConfig `json:"image"`
	Text  *TextConfig  `json:"text"`
}
