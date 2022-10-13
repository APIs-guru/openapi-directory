package shared

type PostgresqlTable struct {
	PostgresqlColumns []PostgresqlColumn `json:"postgresqlColumns"`
	Table             *string            `json:"table"`
}
