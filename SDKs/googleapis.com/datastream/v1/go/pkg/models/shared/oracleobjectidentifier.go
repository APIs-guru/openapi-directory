package shared

type OracleObjectIdentifier struct {
	Schema *string `json:"schema"`
	Table  *string `json:"table"`
}
