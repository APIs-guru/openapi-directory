package shared

type ReplicaConfiguration struct {
	FailoverTarget            *bool                      `json:"failoverTarget"`
	Kind                      *string                    `json:"kind"`
	MysqlReplicaConfiguration *MySQLReplicaConfiguration `json:"mysqlReplicaConfiguration"`
}
