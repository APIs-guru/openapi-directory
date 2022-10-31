package shared



type OracleSchema struct {
    OracleTables []OracleTable `json:"oracleTables,omitempty"`
    SchemaName *string `json:"schemaName,omitempty"`
    
}

