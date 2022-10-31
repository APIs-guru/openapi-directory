package shared



type GoogleAppsDriveLabelsV2betaDisableLabelRequest struct {
    DisabledPolicy *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    UseAdminAccess *bool `json:"useAdminAccess,omitempty"`
    WriteControl *GoogleAppsDriveLabelsV2betaWriteControl `json:"writeControl,omitempty"`
    
}

