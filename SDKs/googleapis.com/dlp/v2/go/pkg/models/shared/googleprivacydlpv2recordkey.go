package shared

type GooglePrivacyDlpV2RecordKey struct {
	BigQueryKey  *GooglePrivacyDlpV2BigQueryKey  `json:"bigQueryKey"`
	DatastoreKey *GooglePrivacyDlpV2DatastoreKey `json:"datastoreKey"`
	IDValues     []string                        `json:"idValues"`
}
