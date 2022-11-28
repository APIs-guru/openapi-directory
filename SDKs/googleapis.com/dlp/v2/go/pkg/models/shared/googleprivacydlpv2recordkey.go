package shared

// GooglePrivacyDlpV2RecordKey
// Message for a unique key indicating a record that contains a finding.
type GooglePrivacyDlpV2RecordKey struct {
	BigQueryKey  *GooglePrivacyDlpV2BigQueryKey  `json:"bigQueryKey,omitempty"`
	DatastoreKey *GooglePrivacyDlpV2DatastoreKey `json:"datastoreKey,omitempty"`
	IDValues     []string                        `json:"idValues,omitempty"`
}
