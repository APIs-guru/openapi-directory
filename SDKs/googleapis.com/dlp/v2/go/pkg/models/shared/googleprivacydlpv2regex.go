package shared

// GooglePrivacyDlpV2Regex
// Message defining a custom regular expression.
type GooglePrivacyDlpV2Regex struct {
	GroupIndexes []int32 `json:"groupIndexes,omitempty"`
	Pattern      *string `json:"pattern,omitempty"`
}
