package shared

type GooglePrivacyDlpV2Trigger struct {
	Manual   map[string]interface{}      `json:"manual"`
	Schedule *GooglePrivacyDlpV2Schedule `json:"schedule"`
}
