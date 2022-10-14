package shared

type GooglePrivacyDlpV2NumericalStatsResult struct {
	MaxValue       *GooglePrivacyDlpV2Value  `json:"maxValue,omitempty"`
	MinValue       *GooglePrivacyDlpV2Value  `json:"minValue,omitempty"`
	QuantileValues []GooglePrivacyDlpV2Value `json:"quantileValues,omitempty"`
}
