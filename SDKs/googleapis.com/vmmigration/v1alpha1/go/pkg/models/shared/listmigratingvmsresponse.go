package shared

type ListMigratingVmsResponse struct {
	MigratingVms  []MigratingVM `json:"migratingVms,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Unreachable   []string      `json:"unreachable,omitempty"`
}
