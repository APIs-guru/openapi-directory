package shared

type GooglePrivacyDlpV2InfoTypeLimit struct {
	InfoType    *GooglePrivacyDlpV2InfoType `json:"infoType,omitempty"`
	MaxFindings *int32                      `json:"maxFindings,omitempty"`
}
