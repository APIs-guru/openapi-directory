package shared

// GoogleCloudDocumentaiV1beta2DocumentPageFormField
// A form field detected on the page.
type GoogleCloudDocumentaiV1beta2DocumentPageFormField struct {
	CorrectedKeyText       *string                                                    `json:"correctedKeyText,omitempty"`
	CorrectedValueText     *string                                                    `json:"correctedValueText,omitempty"`
	FieldName              *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"fieldName,omitempty"`
	FieldValue             *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"fieldValue,omitempty"`
	NameDetectedLanguages  []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"nameDetectedLanguages,omitempty"`
	Provenance             *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance,omitempty"`
	ValueDetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"valueDetectedLanguages,omitempty"`
	ValueType              *string                                                    `json:"valueType,omitempty"`
}
