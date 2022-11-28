package shared

// GooglePrivacyDlpV2Trigger
// What event needs to occur for a new job to be started.
type GooglePrivacyDlpV2Trigger struct {
	Manual   map[string]interface{}      `json:"manual,omitempty"`
	Schedule *GooglePrivacyDlpV2Schedule `json:"schedule,omitempty"`
}
