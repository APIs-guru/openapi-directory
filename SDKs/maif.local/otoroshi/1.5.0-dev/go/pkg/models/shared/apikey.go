package shared

type APIKey struct {
	AuthorizedEntities []string          `json:"authorizedEntities"`
	ClientID           string            `json:"clientId"`
	ClientName         string            `json:"clientName"`
	ClientSecret       string            `json:"clientSecret"`
	DailyQuota         *int64            `json:"dailyQuota"`
	Enabled            bool              `json:"enabled"`
	Metadata           map[string]string `json:"metadata"`
	MonthlyQuota       *int64            `json:"monthlyQuota"`
	ThrottlingQuota    *int64            `json:"throttlingQuota"`
}
