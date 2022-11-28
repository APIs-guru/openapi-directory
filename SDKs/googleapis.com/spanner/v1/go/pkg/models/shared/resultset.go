package shared

// ResultSet
// Results from Read or ExecuteSql.
type ResultSet struct {
	Metadata *ResultSetMetadata `json:"metadata,omitempty"`
	Rows     [][]interface{}    `json:"rows,omitempty"`
	Stats    *ResultSetStats    `json:"stats,omitempty"`
}
