package shared

// GooglePrivacyDlpV2SaveFindings
// If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
type GooglePrivacyDlpV2SaveFindings struct {
	OutputConfig *GooglePrivacyDlpV2OutputStorageConfig `json:"outputConfig,omitempty"`
}
