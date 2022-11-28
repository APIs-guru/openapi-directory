package shared

// SQLServerDatabaseDetails
// Represents a Sql Server database on the Cloud SQL instance.
type SQLServerDatabaseDetails struct {
	CompatibilityLevel *int32  `json:"compatibilityLevel,omitempty"`
	RecoveryModel      *string `json:"recoveryModel,omitempty"`
}
