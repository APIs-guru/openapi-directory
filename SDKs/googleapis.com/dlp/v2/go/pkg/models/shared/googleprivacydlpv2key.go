package shared

type GooglePrivacyDlpV2Key struct {
	PartitionID *GooglePrivacyDlpV2PartitionID  `json:"partitionId"`
	Path        []GooglePrivacyDlpV2PathElement `json:"path"`
}
