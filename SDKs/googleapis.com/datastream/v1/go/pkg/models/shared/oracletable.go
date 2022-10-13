package shared

type OracleTable struct {
	OracleColumns []OracleColumn `json:"oracleColumns"`
	Table         *string        `json:"table"`
}
