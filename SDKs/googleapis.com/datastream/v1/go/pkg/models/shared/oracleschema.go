package shared

type OracleSchema struct {
	OracleTables []OracleTable `json:"oracleTables"`
	Schema       *string       `json:"schema"`
}
