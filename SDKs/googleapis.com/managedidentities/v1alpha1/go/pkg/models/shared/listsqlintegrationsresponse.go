package shared

// ListSQLIntegrationsResponse
// ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.
type ListSQLIntegrationsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	SQLIntegrations []SQLIntegration `json:"sqlIntegrations,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
}
