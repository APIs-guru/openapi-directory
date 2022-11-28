package shared

// PostgresqlRdbms
// PostgreSQL database structure.
type PostgresqlRdbms struct {
	PostgresqlSchemas []PostgresqlSchema `json:"postgresqlSchemas,omitempty"`
}
