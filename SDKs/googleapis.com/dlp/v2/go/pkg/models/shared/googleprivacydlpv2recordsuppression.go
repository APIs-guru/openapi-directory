package shared

// GooglePrivacyDlpV2RecordSuppression
// Configuration to suppress records whose suppression conditions evaluate to true.
type GooglePrivacyDlpV2RecordSuppression struct {
	Condition *GooglePrivacyDlpV2RecordCondition `json:"condition,omitempty"`
}
