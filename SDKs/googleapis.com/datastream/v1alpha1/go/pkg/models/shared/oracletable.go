package shared



type OracleTable struct {
    OracleColumns []OracleColumn `json:"oracleColumns,omitempty"`
    TableName *string `json:"tableName,omitempty"`
    
}

