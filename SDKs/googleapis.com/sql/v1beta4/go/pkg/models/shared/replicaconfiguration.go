package shared

// ReplicaConfiguration
// Read-replica configuration for connecting to the primary instance.
type ReplicaConfiguration struct {
	FailoverTarget            *bool                      `json:"failoverTarget,omitempty"`
	Kind                      *string                    `json:"kind,omitempty"`
	MysqlReplicaConfiguration *MySQLReplicaConfiguration `json:"mysqlReplicaConfiguration,omitempty"`
}
