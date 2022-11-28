package shared

// Query
// A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.
type Query struct {
	Query *string `json:"query,omitempty"`
}
