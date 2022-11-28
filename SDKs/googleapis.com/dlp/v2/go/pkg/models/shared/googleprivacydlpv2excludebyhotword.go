package shared

// GooglePrivacyDlpV2ExcludeByHotword
// The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if a BigQuery column matches a specific pattern.
type GooglePrivacyDlpV2ExcludeByHotword struct {
	HotwordRegex *GooglePrivacyDlpV2Regex     `json:"hotwordRegex,omitempty"`
	Proximity    *GooglePrivacyDlpV2Proximity `json:"proximity,omitempty"`
}
