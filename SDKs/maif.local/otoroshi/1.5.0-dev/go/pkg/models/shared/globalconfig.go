package shared

type GlobalConfig struct {
	AlertsEmails            []string        `json:"alertsEmails"`
	AlertsWebhooks          []Webhook       `json:"alertsWebhooks"`
	AnalyticsWebhooks       []Webhook       `json:"analyticsWebhooks"`
	APIReadOnly             bool            `json:"apiReadOnly"`
	AutoLinkToDefaultGroup  bool            `json:"autoLinkToDefaultGroup"`
	BackofficeAuth0Config   *Auth0Config    `json:"backofficeAuth0Config"`
	CleverSettings          *CleverSettings `json:"cleverSettings"`
	ElasticReadsConfig      *ElasticConfig  `json:"elasticReadsConfig"`
	ElasticWritesConfigs    []ElasticConfig `json:"elasticWritesConfigs"`
	EndlessIPAddresses      []string        `json:"endlessIpAddresses"`
	IPFiltering             IPFiltering     `json:"ipFiltering"`
	LimitConcurrentRequests bool            `json:"limitConcurrentRequests"`
	Lines                   []string        `json:"lines"`
	MailerSettings          *MailerSettings `json:"mailerSettings"`
	MaxConcurrentRequests   int64           `json:"maxConcurrentRequests"`
	MaxHttp10ResponseSize   *int64          `json:"maxHttp10ResponseSize"`
	MaxLogsSize             *int32          `json:"maxLogsSize"`
	MiddleFingers           *bool           `json:"middleFingers"`
	PerIPThrottlingQuota    int64           `json:"perIpThrottlingQuota"`
	PrivateAppsAuth0Config  *Auth0Config    `json:"privateAppsAuth0Config"`
	StreamEntityOnly        bool            `json:"streamEntityOnly"`
	ThrottlingQuota         int64           `json:"throttlingQuota"`
	U2fLoginOnly            bool            `json:"u2fLoginOnly"`
	UseCircuitBreakers      bool            `json:"useCircuitBreakers"`
}
