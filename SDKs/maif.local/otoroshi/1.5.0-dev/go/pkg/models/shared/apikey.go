package shared

// APIKey
// An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
type APIKey struct {
	AuthorizedEntities []string          `json:"authorizedEntities"`
	ClientID           string            `json:"clientId"`
	ClientName         string            `json:"clientName"`
	ClientSecret       string            `json:"clientSecret"`
	DailyQuota         *int64            `json:"dailyQuota,omitempty"`
	Enabled            bool              `json:"enabled"`
	Metadata           map[string]string `json:"metadata,omitempty"`
	MonthlyQuota       *int64            `json:"monthlyQuota,omitempty"`
	ThrottlingQuota    *int64            `json:"throttlingQuota,omitempty"`
}
