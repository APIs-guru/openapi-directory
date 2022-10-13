package shared

type ListMigrationJobsResponse struct {
	MigrationJobs []MigrationJob `json:"migrationJobs"`
	NextPageToken *string        `json:"nextPageToken"`
	Unreachable   []string       `json:"unreachable"`
}
