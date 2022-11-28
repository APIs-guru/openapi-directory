package shared

// OracleSchema
// Oracle schema.
type OracleSchema struct {
	OracleTables []OracleTable `json:"oracleTables,omitempty"`
	SchemaName   *string       `json:"schemaName,omitempty"`
}
