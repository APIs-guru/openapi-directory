package shared

type PostgresqlSchema struct {
	PostgresqlTables []PostgresqlTable `json:"postgresqlTables,omitempty"`
	Schema           *string           `json:"schema,omitempty"`
}
