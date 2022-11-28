package shared

// GoogleCloudDocumentaiV1DocumentPageFormField
// A form field detected on the page.
type GoogleCloudDocumentaiV1DocumentPageFormField struct {
	CorrectedKeyText       *string                                               `json:"correctedKeyText,omitempty"`
	CorrectedValueText     *string                                               `json:"correctedValueText,omitempty"`
	FieldName              *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"fieldName,omitempty"`
	FieldValue             *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"fieldValue,omitempty"`
	NameDetectedLanguages  []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"nameDetectedLanguages,omitempty"`
	Provenance             *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance,omitempty"`
	ValueDetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"valueDetectedLanguages,omitempty"`
	ValueType              *string                                               `json:"valueType,omitempty"`
}
