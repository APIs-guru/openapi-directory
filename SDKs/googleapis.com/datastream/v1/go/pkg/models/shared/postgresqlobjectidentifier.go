package shared

type PostgresqlObjectIdentifier struct {
	Schema *string `json:"schema"`
	Table  *string `json:"table"`
}
