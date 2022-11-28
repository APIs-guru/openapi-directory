package shared

// GooglePrivacyDlpV2RecordLocation
// Location of a finding within a row or record.
type GooglePrivacyDlpV2RecordLocation struct {
	FieldID       *GooglePrivacyDlpV2FieldID       `json:"fieldId,omitempty"`
	RecordKey     *GooglePrivacyDlpV2RecordKey     `json:"recordKey,omitempty"`
	TableLocation *GooglePrivacyDlpV2TableLocation `json:"tableLocation,omitempty"`
}
