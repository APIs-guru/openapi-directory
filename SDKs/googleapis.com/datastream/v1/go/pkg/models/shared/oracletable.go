package shared

// OracleTable
// Oracle table.
type OracleTable struct {
	OracleColumns []OracleColumn `json:"oracleColumns,omitempty"`
	Table         *string        `json:"table,omitempty"`
}
