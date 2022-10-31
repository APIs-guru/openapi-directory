package shared



type DemoteMasterConfiguration struct {
    Kind *string `json:"kind,omitempty"`
    MysqlReplicaConfiguration *DemoteMasterMySQLReplicaConfiguration `json:"mysqlReplicaConfiguration,omitempty"`
    
}

