package shared

// ExecuteSQLQueryRequest
// An execute sql query request containing the query and the connection to execute it on.
type ExecuteSQLQueryRequest struct {
	Query *Query `json:"query,omitempty"`
}
