package shared

// GooglePrivacyDlpV2Key
// A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
type GooglePrivacyDlpV2Key struct {
	PartitionID *GooglePrivacyDlpV2PartitionID  `json:"partitionId,omitempty"`
	Path        []GooglePrivacyDlpV2PathElement `json:"path,omitempty"`
}
