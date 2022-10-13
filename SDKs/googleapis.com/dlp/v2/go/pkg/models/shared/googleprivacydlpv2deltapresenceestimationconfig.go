package shared

type GooglePrivacyDlpV2DeltaPresenceEstimationConfig struct {
	AuxiliaryTables []GooglePrivacyDlpV2StatisticalTable `json:"auxiliaryTables"`
	QuasiIds        []GooglePrivacyDlpV2QuasiID          `json:"quasiIds"`
	RegionCode      *string                              `json:"regionCode"`
}
