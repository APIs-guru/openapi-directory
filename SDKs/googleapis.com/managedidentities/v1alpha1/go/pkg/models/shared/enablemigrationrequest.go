package shared

// EnableMigrationRequest
// EnableMigrationRequest is the request message for EnableMigration method.
type EnableMigrationRequest struct {
	MigratingDomains []OnPremDomainDetails `json:"migratingDomains,omitempty"`
}
