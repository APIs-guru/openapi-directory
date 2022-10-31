package shared



type GooglePrivacyDlpV2DeltaPresenceEstimationConfig struct {
    AuxiliaryTables []GooglePrivacyDlpV2StatisticalTable `json:"auxiliaryTables,omitempty"`
    QuasiIds []GooglePrivacyDlpV2QuasiID `json:"quasiIds,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    
}

