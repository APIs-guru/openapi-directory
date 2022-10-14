package shared

type GetDatabaseDdlResponse struct {
	Statements []string `json:"statements,omitempty"`
}
