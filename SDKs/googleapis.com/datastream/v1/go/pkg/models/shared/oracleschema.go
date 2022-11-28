package shared

// OracleSchema
// Oracle schema.
type OracleSchema struct {
	OracleTables []OracleTable `json:"oracleTables,omitempty"`
	Schema       *string       `json:"schema,omitempty"`
}
