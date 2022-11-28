package shared

// BigQueryQuerySpec
// Specifies a custom BigQuery query.
type BigQueryQuerySpec struct {
	RawQuery *string `json:"rawQuery,omitempty"`
}
