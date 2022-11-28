package shared

// GetDatabaseDdlResponse
// The response for GetDatabaseDdl.
type GetDatabaseDdlResponse struct {
	Statements []string `json:"statements,omitempty"`
}
