package shared

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
