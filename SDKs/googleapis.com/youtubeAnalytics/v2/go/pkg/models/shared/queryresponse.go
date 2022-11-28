package shared

// QueryResponse
// Response message for TargetedQueriesService.Query.
type QueryResponse struct {
	ColumnHeaders []ResultTableColumnHeader `json:"columnHeaders,omitempty"`
	Errors        *Errors                   `json:"errors,omitempty"`
	Kind          *string                   `json:"kind,omitempty"`
	Rows          [][]interface{}           `json:"rows,omitempty"`
}
