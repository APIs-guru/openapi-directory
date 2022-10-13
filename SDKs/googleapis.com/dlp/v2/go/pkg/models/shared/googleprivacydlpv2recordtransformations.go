package shared

type GooglePrivacyDlpV2RecordTransformations struct {
	FieldTransformations []GooglePrivacyDlpV2FieldTransformation `json:"fieldTransformations"`
	RecordSuppressions   []GooglePrivacyDlpV2RecordSuppression   `json:"recordSuppressions"`
}
