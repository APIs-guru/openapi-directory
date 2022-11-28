package shared

// OracleRdbms
// Oracle database structure.
type OracleRdbms struct {
	OracleSchemas []OracleSchema `json:"oracleSchemas,omitempty"`
}
