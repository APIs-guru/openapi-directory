package shared

type SQLServerDatabaseDetails struct {
	CompatibilityLevel *int32  `json:"compatibilityLevel"`
	RecoveryModel      *string `json:"recoveryModel"`
}
