package shared

type GoogleCloudDocumentaiV1DocumentPageFormField struct {
	CorrectedKeyText       *string                                               `json:"correctedKeyText"`
	CorrectedValueText     *string                                               `json:"correctedValueText"`
	FieldName              *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"fieldName"`
	FieldValue             *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"fieldValue"`
	NameDetectedLanguages  []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"nameDetectedLanguages"`
	Provenance             *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance"`
	ValueDetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"valueDetectedLanguages"`
	ValueType              *string                                               `json:"valueType"`
}
