package shared

// PartialResultSet
// Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.
type PartialResultSet struct {
	ChunkedValue *bool              `json:"chunkedValue,omitempty"`
	Metadata     *ResultSetMetadata `json:"metadata,omitempty"`
	ResumeToken  *string            `json:"resumeToken,omitempty"`
	Stats        *ResultSetStats    `json:"stats,omitempty"`
	Values       []interface{}      `json:"values,omitempty"`
}
