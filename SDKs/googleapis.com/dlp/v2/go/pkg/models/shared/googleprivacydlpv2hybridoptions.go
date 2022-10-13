package shared

type GooglePrivacyDlpV2HybridOptions struct {
	Description              *string                         `json:"description"`
	Labels                   map[string]string               `json:"labels"`
	RequiredFindingLabelKeys []string                        `json:"requiredFindingLabelKeys"`
	TableOptions             *GooglePrivacyDlpV2TableOptions `json:"tableOptions"`
}
