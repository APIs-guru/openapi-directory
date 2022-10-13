package shared

type GooglePrivacyDlpV2KMapEstimationConfig struct {
	AuxiliaryTables []GooglePrivacyDlpV2AuxiliaryTable `json:"auxiliaryTables"`
	QuasiIds        []GooglePrivacyDlpV2TaggedField    `json:"quasiIds"`
	RegionCode      *string                            `json:"regionCode"`
}
