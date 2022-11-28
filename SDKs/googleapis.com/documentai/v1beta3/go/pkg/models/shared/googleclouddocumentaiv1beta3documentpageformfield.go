package shared

// GoogleCloudDocumentaiV1beta3DocumentPageFormField
// A form field detected on the page.
type GoogleCloudDocumentaiV1beta3DocumentPageFormField struct {
	CorrectedKeyText       *string                                                    `json:"correctedKeyText,omitempty"`
	CorrectedValueText     *string                                                    `json:"correctedValueText,omitempty"`
	FieldName              *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"fieldName,omitempty"`
	FieldValue             *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"fieldValue,omitempty"`
	NameDetectedLanguages  []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"nameDetectedLanguages,omitempty"`
	Provenance             *GoogleCloudDocumentaiV1beta3DocumentProvenance            `json:"provenance,omitempty"`
	ValueDetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"valueDetectedLanguages,omitempty"`
	ValueType              *string                                                    `json:"valueType,omitempty"`
}
