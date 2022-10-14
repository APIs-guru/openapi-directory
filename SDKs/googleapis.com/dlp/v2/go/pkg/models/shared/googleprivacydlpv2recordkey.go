package shared

type GooglePrivacyDlpV2RecordKey struct {
	BigQueryKey  *GooglePrivacyDlpV2BigQueryKey  `json:"bigQueryKey,omitempty"`
	DatastoreKey *GooglePrivacyDlpV2DatastoreKey `json:"datastoreKey,omitempty"`
	IDValues     []string                        `json:"idValues,omitempty"`
}
