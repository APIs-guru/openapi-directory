package shared

type GooglePrivacyDlpV2LDiversityEquivalenceClass struct {
	EquivalenceClassSize       *string                            `json:"equivalenceClassSize"`
	NumDistinctSensitiveValues *string                            `json:"numDistinctSensitiveValues"`
	QuasiIdsValues             []GooglePrivacyDlpV2Value          `json:"quasiIdsValues"`
	TopSensitiveValues         []GooglePrivacyDlpV2ValueFrequency `json:"topSensitiveValues"`
}
