package shared

type OracleTable struct {
	OracleColumns []OracleColumn `json:"oracleColumns"`
	TableName     *string        `json:"tableName"`
}
