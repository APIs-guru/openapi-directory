package shared



type GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails struct {
    CategoricalStatsResult *GooglePrivacyDlpV2CategoricalStatsResult `json:"categoricalStatsResult,omitempty"`
    DeltaPresenceEstimationResult *GooglePrivacyDlpV2DeltaPresenceEstimationResult `json:"deltaPresenceEstimationResult,omitempty"`
    KAnonymityResult *GooglePrivacyDlpV2KAnonymityResult `json:"kAnonymityResult,omitempty"`
    KMapEstimationResult *GooglePrivacyDlpV2KMapEstimationResult `json:"kMapEstimationResult,omitempty"`
    LDiversityResult *GooglePrivacyDlpV2LDiversityResult `json:"lDiversityResult,omitempty"`
    NumericalStatsResult *GooglePrivacyDlpV2NumericalStatsResult `json:"numericalStatsResult,omitempty"`
    RequestedOptions *GooglePrivacyDlpV2RequestedRiskAnalysisOptions `json:"requestedOptions,omitempty"`
    RequestedPrivacyMetric *GooglePrivacyDlpV2PrivacyMetric `json:"requestedPrivacyMetric,omitempty"`
    RequestedSourceTable *GooglePrivacyDlpV2BigQueryTable `json:"requestedSourceTable,omitempty"`
    
}

