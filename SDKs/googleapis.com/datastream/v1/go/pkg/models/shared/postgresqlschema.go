package shared

type PostgresqlSchema struct {
	PostgresqlTables []PostgresqlTable `json:"postgresqlTables"`
	Schema           *string           `json:"schema"`
}
