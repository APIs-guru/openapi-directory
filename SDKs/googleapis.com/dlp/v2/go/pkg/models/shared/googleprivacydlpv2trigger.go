package shared

type GooglePrivacyDlpV2Trigger struct {
	Manual   map[string]interface{}      `json:"manual,omitempty"`
	Schedule *GooglePrivacyDlpV2Schedule `json:"schedule,omitempty"`
}
