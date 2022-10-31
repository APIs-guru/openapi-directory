package shared



type ListSQLIntegrationsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    SQLIntegrations []SQLIntegration `json:"sqlIntegrations,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

