package shared

// PostgresqlObjectIdentifier
// PostgreSQL data source object identifier.
type PostgresqlObjectIdentifier struct {
	Schema *string `json:"schema,omitempty"`
	Table  *string `json:"table,omitempty"`
}
