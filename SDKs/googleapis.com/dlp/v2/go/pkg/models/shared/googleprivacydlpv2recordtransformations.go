package shared



type GooglePrivacyDlpV2RecordTransformations struct {
    FieldTransformations []GooglePrivacyDlpV2FieldTransformation `json:"fieldTransformations,omitempty"`
    RecordSuppressions []GooglePrivacyDlpV2RecordSuppression `json:"recordSuppressions,omitempty"`
    
}

