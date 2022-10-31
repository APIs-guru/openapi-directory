package shared



type GooglePrivacyDlpV2FindingLimits struct {
    MaxFindingsPerInfoType []GooglePrivacyDlpV2InfoTypeLimit `json:"maxFindingsPerInfoType,omitempty"`
    MaxFindingsPerItem *int32 `json:"maxFindingsPerItem,omitempty"`
    MaxFindingsPerRequest *int32 `json:"maxFindingsPerRequest,omitempty"`
    
}

