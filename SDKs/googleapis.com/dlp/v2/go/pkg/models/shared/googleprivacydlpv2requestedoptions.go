package shared

// GooglePrivacyDlpV2RequestedOptions
// Snapshot of the inspection configuration.
type GooglePrivacyDlpV2RequestedOptions struct {
	JobConfig               *GooglePrivacyDlpV2InspectJobConfig `json:"jobConfig,omitempty"`
	SnapshotInspectTemplate *GooglePrivacyDlpV2InspectTemplate  `json:"snapshotInspectTemplate,omitempty"`
}
