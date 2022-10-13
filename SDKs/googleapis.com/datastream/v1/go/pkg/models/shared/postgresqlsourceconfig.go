package shared

type PostgresqlSourceConfig struct {
	ExcludeObjects  *PostgresqlRdbms `json:"excludeObjects"`
	IncludeObjects  *PostgresqlRdbms `json:"includeObjects"`
	Publication     *string          `json:"publication"`
	ReplicationSlot *string          `json:"replicationSlot"`
}
