package shared

type ListLogEntriesRequest struct {
	Filter        *string  `json:"filter"`
	OrderBy       *string  `json:"orderBy"`
	PageSize      *int32   `json:"pageSize"`
	PageToken     *string  `json:"pageToken"`
	ProjectIds    []string `json:"projectIds"`
	ResourceNames []string `json:"resourceNames"`
}
