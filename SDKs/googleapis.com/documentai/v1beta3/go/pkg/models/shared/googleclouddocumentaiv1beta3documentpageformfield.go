package shared

type GoogleCloudDocumentaiV1beta3DocumentPageFormField struct {
	CorrectedKeyText       *string                                                    `json:"correctedKeyText"`
	CorrectedValueText     *string                                                    `json:"correctedValueText"`
	FieldName              *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"fieldName"`
	FieldValue             *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"fieldValue"`
	NameDetectedLanguages  []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"nameDetectedLanguages"`
	Provenance             *GoogleCloudDocumentaiV1beta3DocumentProvenance            `json:"provenance"`
	ValueDetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"valueDetectedLanguages"`
	ValueType              *string                                                    `json:"valueType"`
}
