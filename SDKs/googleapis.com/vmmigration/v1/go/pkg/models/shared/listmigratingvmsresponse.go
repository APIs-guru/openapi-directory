package shared

type ListMigratingVmsResponse struct {
	MigratingVms  []MigratingVM `json:"migratingVms"`
	NextPageToken *string       `json:"nextPageToken"`
	Unreachable   []string      `json:"unreachable"`
}
