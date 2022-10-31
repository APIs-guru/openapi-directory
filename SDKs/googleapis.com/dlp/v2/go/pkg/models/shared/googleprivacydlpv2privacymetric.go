package shared

type GooglePrivacyDlpV2PrivacyMetric struct {
	CategoricalStatsConfig        *GooglePrivacyDlpV2CategoricalStatsConfig        `json:"categoricalStatsConfig,omitempty"`
	DeltaPresenceEstimationConfig *GooglePrivacyDlpV2DeltaPresenceEstimationConfig `json:"deltaPresenceEstimationConfig,omitempty"`
	KAnonymityConfig              *GooglePrivacyDlpV2KAnonymityConfig              `json:"kAnonymityConfig,omitempty"`
	KMapEstimationConfig          *GooglePrivacyDlpV2KMapEstimationConfig          `json:"kMapEstimationConfig,omitempty"`
	LDiversityConfig              *GooglePrivacyDlpV2LDiversityConfig              `json:"lDiversityConfig,omitempty"`
	NumericalStatsConfig          *GooglePrivacyDlpV2NumericalStatsConfig          `json:"numericalStatsConfig,omitempty"`
}
