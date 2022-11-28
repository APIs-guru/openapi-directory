package shared

// TableSchema
// BigQuery Compatible table schema.
type TableSchema struct {
	Fields []TableFieldSchema `json:"fields,omitempty"`
}
