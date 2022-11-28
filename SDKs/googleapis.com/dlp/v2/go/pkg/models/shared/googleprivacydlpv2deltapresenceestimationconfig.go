package shared

// GooglePrivacyDlpV2DeltaPresenceEstimationConfig
// δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
type GooglePrivacyDlpV2DeltaPresenceEstimationConfig struct {
	AuxiliaryTables []GooglePrivacyDlpV2StatisticalTable `json:"auxiliaryTables,omitempty"`
	QuasiIds        []GooglePrivacyDlpV2QuasiID          `json:"quasiIds,omitempty"`
	RegionCode      *string                              `json:"regionCode,omitempty"`
}
