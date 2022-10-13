package shared

type BigQueryIoDetails struct {
	Dataset   *string `json:"dataset"`
	ProjectID *string `json:"projectId"`
	Query     *string `json:"query"`
	Table     *string `json:"table"`
}
