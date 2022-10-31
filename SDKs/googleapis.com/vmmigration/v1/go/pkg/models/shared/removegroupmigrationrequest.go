package shared

type RemoveGroupMigrationRequest struct {
	MigratingVM *string `json:"migratingVm,omitempty"`
}
