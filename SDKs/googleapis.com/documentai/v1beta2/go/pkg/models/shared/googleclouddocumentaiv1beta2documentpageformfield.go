package shared

type GoogleCloudDocumentaiV1beta2DocumentPageFormField struct {
	CorrectedKeyText       *string                                                    `json:"correctedKeyText"`
	CorrectedValueText     *string                                                    `json:"correctedValueText"`
	FieldName              *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"fieldName"`
	FieldValue             *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"fieldValue"`
	NameDetectedLanguages  []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"nameDetectedLanguages"`
	Provenance             *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance"`
	ValueDetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"valueDetectedLanguages"`
	ValueType              *string                                                    `json:"valueType"`
}
