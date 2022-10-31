package shared

type OracleSchema struct {
	OracleTables []OracleTable `json:"oracleTables,omitempty"`
	Schema       *string       `json:"schema,omitempty"`
}
