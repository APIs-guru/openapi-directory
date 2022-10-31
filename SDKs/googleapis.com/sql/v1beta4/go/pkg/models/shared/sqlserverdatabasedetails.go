package shared

type SQLServerDatabaseDetails struct {
	CompatibilityLevel *int32  `json:"compatibilityLevel,omitempty"`
	RecoveryModel      *string `json:"recoveryModel,omitempty"`
}
