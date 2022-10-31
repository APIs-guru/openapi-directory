package shared



type ReplicaConfiguration struct {
    FailoverTarget *bool `json:"failoverTarget,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MysqlReplicaConfiguration *MySQLReplicaConfiguration `json:"mysqlReplicaConfiguration,omitempty"`
    
}

