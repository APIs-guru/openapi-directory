package shared

type EnableMigrationRequest struct {
	MigratingDomains []OnPremDomainDetails `json:"migratingDomains"`
}
