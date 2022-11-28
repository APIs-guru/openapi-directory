package shared

// DemoteMasterConfiguration
// Read-replica configuration for connecting to the on-premises primary instance.
type DemoteMasterConfiguration struct {
	Kind                      *string                                `json:"kind,omitempty"`
	MysqlReplicaConfiguration *DemoteMasterMySQLReplicaConfiguration `json:"mysqlReplicaConfiguration,omitempty"`
}
