package shared

type BigQueryTableSpec struct {
	DatasetID      *string `json:"datasetId"`
	TableID        *string `json:"tableId"`
	TableProjectID *string `json:"tableProjectId"`
}
