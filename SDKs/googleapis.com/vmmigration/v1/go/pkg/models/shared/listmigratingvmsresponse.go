package shared

// ListMigratingVmsResponse
// Response message for 'ListMigratingVms' request.
type ListMigratingVmsResponse struct {
	MigratingVms  []MigratingVM `json:"migratingVms,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Unreachable   []string      `json:"unreachable,omitempty"`
}
