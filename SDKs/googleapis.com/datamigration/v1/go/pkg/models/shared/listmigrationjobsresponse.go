package shared

// ListMigrationJobsResponse
// Response message for 'ListMigrationJobs' request.
type ListMigrationJobsResponse struct {
	MigrationJobs []MigrationJob `json:"migrationJobs,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Unreachable   []string       `json:"unreachable,omitempty"`
}
