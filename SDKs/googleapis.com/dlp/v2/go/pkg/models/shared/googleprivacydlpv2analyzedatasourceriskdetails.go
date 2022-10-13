package shared

type GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails struct {
	CategoricalStatsResult        *GooglePrivacyDlpV2CategoricalStatsResult        `json:"categoricalStatsResult"`
	DeltaPresenceEstimationResult *GooglePrivacyDlpV2DeltaPresenceEstimationResult `json:"deltaPresenceEstimationResult"`
	KAnonymityResult              *GooglePrivacyDlpV2KAnonymityResult              `json:"kAnonymityResult"`
	KMapEstimationResult          *GooglePrivacyDlpV2KMapEstimationResult          `json:"kMapEstimationResult"`
	LDiversityResult              *GooglePrivacyDlpV2LDiversityResult              `json:"lDiversityResult"`
	NumericalStatsResult          *GooglePrivacyDlpV2NumericalStatsResult          `json:"numericalStatsResult"`
	RequestedOptions              *GooglePrivacyDlpV2RequestedRiskAnalysisOptions  `json:"requestedOptions"`
	RequestedPrivacyMetric        *GooglePrivacyDlpV2PrivacyMetric                 `json:"requestedPrivacyMetric"`
	RequestedSourceTable          *GooglePrivacyDlpV2BigQueryTable                 `json:"requestedSourceTable"`
}
