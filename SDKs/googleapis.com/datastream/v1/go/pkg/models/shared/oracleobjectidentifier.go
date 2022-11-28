package shared

// OracleObjectIdentifier
// Oracle data source object identifier.
type OracleObjectIdentifier struct {
	Schema *string `json:"schema,omitempty"`
	Table  *string `json:"table,omitempty"`
}
