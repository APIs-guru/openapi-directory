package shared



type GooglePrivacyDlpV2LDiversityEquivalenceClass struct {
    EquivalenceClassSize *string `json:"equivalenceClassSize,omitempty"`
    NumDistinctSensitiveValues *string `json:"numDistinctSensitiveValues,omitempty"`
    QuasiIdsValues []GooglePrivacyDlpV2Value `json:"quasiIdsValues,omitempty"`
    TopSensitiveValues []GooglePrivacyDlpV2ValueFrequency `json:"topSensitiveValues,omitempty"`
    
}

