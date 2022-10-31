package shared



type PostgresqlSourceConfig struct {
    ExcludeObjects *PostgresqlRdbms `json:"excludeObjects,omitempty"`
    IncludeObjects *PostgresqlRdbms `json:"includeObjects,omitempty"`
    Publication *string `json:"publication,omitempty"`
    ReplicationSlot *string `json:"replicationSlot,omitempty"`
    
}

