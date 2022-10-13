package shared

type OracleSchema struct {
	OracleTables []OracleTable `json:"oracleTables"`
	SchemaName   *string       `json:"schemaName"`
}
