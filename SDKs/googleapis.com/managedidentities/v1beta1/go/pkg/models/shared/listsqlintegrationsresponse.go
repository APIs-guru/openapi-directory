package shared

type ListSQLIntegrationsResponse struct {
	NextPageToken   *string          `json:"nextPageToken"`
	SQLIntegrations []SQLIntegration `json:"sqlIntegrations"`
	Unreachable     []string         `json:"unreachable"`
}
