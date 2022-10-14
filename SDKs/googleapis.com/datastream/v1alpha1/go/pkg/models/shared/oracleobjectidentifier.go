package shared

type OracleObjectIdentifier struct {
	Schema *string `json:"schema,omitempty"`
	Table  *string `json:"table,omitempty"`
}
