package shared

// GooglePrivacyDlpV2Range
// Generic half-open interval [start, end)
type GooglePrivacyDlpV2Range struct {
	End   *string `json:"end,omitempty"`
	Start *string `json:"start,omitempty"`
}
