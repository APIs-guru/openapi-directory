package shared

type DemoteMasterConfiguration struct {
	Kind                      *string                                `json:"kind"`
	MysqlReplicaConfiguration *DemoteMasterMySQLReplicaConfiguration `json:"mysqlReplicaConfiguration"`
}
