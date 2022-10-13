package shared

type GooglePrivacyDlpV2NumericalStatsResult struct {
	MaxValue       *GooglePrivacyDlpV2Value  `json:"maxValue"`
	MinValue       *GooglePrivacyDlpV2Value  `json:"minValue"`
	QuantileValues []GooglePrivacyDlpV2Value `json:"quantileValues"`
}
