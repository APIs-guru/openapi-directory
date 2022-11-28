package shared

// PostgresqlTable
// PostgreSQL table.
type PostgresqlTable struct {
	PostgresqlColumns []PostgresqlColumn `json:"postgresqlColumns,omitempty"`
	Table             *string            `json:"table,omitempty"`
}
