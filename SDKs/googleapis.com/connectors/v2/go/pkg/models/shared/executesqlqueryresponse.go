package shared

// ExecuteSQLQueryResponse
// A response returned by the connection after executing the sql query.
type ExecuteSQLQueryResponse struct {
	Results []map[string]interface{} `json:"results,omitempty"`
}
