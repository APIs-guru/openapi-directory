package shared

type BigQueryDataSourceSpec struct {
	ProjectID *string            `json:"projectId"`
	QuerySpec *BigQueryQuerySpec `json:"querySpec"`
	TableSpec *BigQueryTableSpec `json:"tableSpec"`
}
