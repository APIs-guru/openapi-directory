package shared

// ListSQLIntegrationsResponse
// ListSqlIntegrationsResponse is the response message for ListSqlIntegrations method.
type ListSQLIntegrationsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	SQLIntegrations []SQLIntegration `json:"sqlIntegrations,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
}
