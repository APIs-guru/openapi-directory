package shared

type GooglePrivacyDlpV2RequestedOptions struct {
	JobConfig               *GooglePrivacyDlpV2InspectJobConfig `json:"jobConfig"`
	SnapshotInspectTemplate *GooglePrivacyDlpV2InspectTemplate  `json:"snapshotInspectTemplate"`
}
