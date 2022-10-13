package shared

type PartialResultSet struct {
	ChunkedValue *bool              `json:"chunkedValue"`
	Metadata     *ResultSetMetadata `json:"metadata"`
	ResumeToken  *string            `json:"resumeToken"`
	Stats        *ResultSetStats    `json:"stats"`
	Values       []interface{}      `json:"values"`
}
