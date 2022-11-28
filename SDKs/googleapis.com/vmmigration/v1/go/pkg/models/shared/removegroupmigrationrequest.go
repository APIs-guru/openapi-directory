package shared

// RemoveGroupMigrationRequest
// Request message for 'RemoveMigration' request.
type RemoveGroupMigrationRequest struct {
	MigratingVM *string `json:"migratingVm,omitempty"`
}
