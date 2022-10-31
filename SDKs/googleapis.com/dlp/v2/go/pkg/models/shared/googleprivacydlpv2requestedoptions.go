package shared



type GooglePrivacyDlpV2RequestedOptions struct {
    JobConfig *GooglePrivacyDlpV2InspectJobConfig `json:"jobConfig,omitempty"`
    SnapshotInspectTemplate *GooglePrivacyDlpV2InspectTemplate `json:"snapshotInspectTemplate,omitempty"`
    
}

