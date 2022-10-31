package shared



type GooglePrivacyDlpV2HybridFindingDetails struct {
    ContainerDetails *GooglePrivacyDlpV2Container `json:"containerDetails,omitempty"`
    FileOffset *string `json:"fileOffset,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    RowOffset *string `json:"rowOffset,omitempty"`
    TableOptions *GooglePrivacyDlpV2TableOptions `json:"tableOptions,omitempty"`
    
}

