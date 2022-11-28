package shared

// GooglePrivacyDlpV2InfoTypeLimit
// Max findings configuration per infoType, per content item or long running DlpJob.
type GooglePrivacyDlpV2InfoTypeLimit struct {
	InfoType    *GooglePrivacyDlpV2InfoType `json:"infoType,omitempty"`
	MaxFindings *int32                      `json:"maxFindings,omitempty"`
}
