package shared

// QueryResult
// Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages.
type QueryResult struct {
	NextPageToken *string                  `json:"nextPageToken,omitempty"`
	Rows          []map[string]interface{} `json:"rows,omitempty"`
	Schema        *TableSchema             `json:"schema,omitempty"`
	TotalRows     *string                  `json:"totalRows,omitempty"`
}
