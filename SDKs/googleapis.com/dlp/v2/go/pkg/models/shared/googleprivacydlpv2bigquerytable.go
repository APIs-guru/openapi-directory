package shared

type GooglePrivacyDlpV2BigQueryTable struct {
	DatasetID *string `json:"datasetId"`
	ProjectID *string `json:"projectId"`
	TableID   *string `json:"tableId"`
}
