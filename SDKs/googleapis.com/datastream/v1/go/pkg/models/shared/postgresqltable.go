package shared



type PostgresqlTable struct {
    PostgresqlColumns []PostgresqlColumn `json:"postgresqlColumns,omitempty"`
    Table *string `json:"table,omitempty"`
    
}

