package shared

type GooglePrivacyDlpV2RecordLocation struct {
	FieldID       *GooglePrivacyDlpV2FieldID       `json:"fieldId"`
	RecordKey     *GooglePrivacyDlpV2RecordKey     `json:"recordKey"`
	TableLocation *GooglePrivacyDlpV2TableLocation `json:"tableLocation"`
}
