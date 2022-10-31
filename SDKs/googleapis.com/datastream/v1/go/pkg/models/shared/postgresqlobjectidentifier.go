package shared



type PostgresqlObjectIdentifier struct {
    Schema *string `json:"schema,omitempty"`
    Table *string `json:"table,omitempty"`
    
}

