package shared

type GooglePrivacyDlpV2InfoTypeLimit struct {
	InfoType    *GooglePrivacyDlpV2InfoType `json:"infoType"`
	MaxFindings *int32                      `json:"maxFindings"`
}
