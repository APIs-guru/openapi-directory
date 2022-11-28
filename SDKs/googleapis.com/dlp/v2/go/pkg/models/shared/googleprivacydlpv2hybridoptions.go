package shared

// GooglePrivacyDlpV2HybridOptions
// Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
type GooglePrivacyDlpV2HybridOptions struct {
	Description              *string                         `json:"description,omitempty"`
	Labels                   map[string]string               `json:"labels,omitempty"`
	RequiredFindingLabelKeys []string                        `json:"requiredFindingLabelKeys,omitempty"`
	TableOptions             *GooglePrivacyDlpV2TableOptions `json:"tableOptions,omitempty"`
}
