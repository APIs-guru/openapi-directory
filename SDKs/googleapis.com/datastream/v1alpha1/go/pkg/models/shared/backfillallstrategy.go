package shared

type BackfillAllStrategy struct {
	MysqlExcludedObjects  *MysqlRdbms  `json:"mysqlExcludedObjects,omitempty"`
	OracleExcludedObjects *OracleRdbms `json:"oracleExcludedObjects,omitempty"`
}
