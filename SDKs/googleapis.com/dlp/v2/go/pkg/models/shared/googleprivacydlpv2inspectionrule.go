package shared



type GooglePrivacyDlpV2InspectionRule struct {
    ExclusionRule *GooglePrivacyDlpV2ExclusionRule `json:"exclusionRule,omitempty"`
    HotwordRule *GooglePrivacyDlpV2HotwordRule `json:"hotwordRule,omitempty"`
    
}

