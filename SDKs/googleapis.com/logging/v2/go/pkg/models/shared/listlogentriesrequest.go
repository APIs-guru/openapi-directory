package shared

// ListLogEntriesRequest
// The parameters to ListLogEntries.
type ListLogEntriesRequest struct {
	Filter        *string  `json:"filter,omitempty"`
	OrderBy       *string  `json:"orderBy,omitempty"`
	PageSize      *int32   `json:"pageSize,omitempty"`
	PageToken     *string  `json:"pageToken,omitempty"`
	ProjectIds    []string `json:"projectIds,omitempty"`
	ResourceNames []string `json:"resourceNames,omitempty"`
}
