package shared

type GooglePrivacyDlpV2PrivacyMetric struct {
	CategoricalStatsConfig        *GooglePrivacyDlpV2CategoricalStatsConfig        `json:"categoricalStatsConfig"`
	DeltaPresenceEstimationConfig *GooglePrivacyDlpV2DeltaPresenceEstimationConfig `json:"deltaPresenceEstimationConfig"`
	KAnonymityConfig              *GooglePrivacyDlpV2KAnonymityConfig              `json:"kAnonymityConfig"`
	KMapEstimationConfig          *GooglePrivacyDlpV2KMapEstimationConfig          `json:"kMapEstimationConfig"`
	LDiversityConfig              *GooglePrivacyDlpV2LDiversityConfig              `json:"lDiversityConfig"`
	NumericalStatsConfig          *GooglePrivacyDlpV2NumericalStatsConfig          `json:"numericalStatsConfig"`
}
