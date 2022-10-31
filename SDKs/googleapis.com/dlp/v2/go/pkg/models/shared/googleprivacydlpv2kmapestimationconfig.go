package shared



type GooglePrivacyDlpV2KMapEstimationConfig struct {
    AuxiliaryTables []GooglePrivacyDlpV2AuxiliaryTable `json:"auxiliaryTables,omitempty"`
    QuasiIds []GooglePrivacyDlpV2TaggedField `json:"quasiIds,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    
}

