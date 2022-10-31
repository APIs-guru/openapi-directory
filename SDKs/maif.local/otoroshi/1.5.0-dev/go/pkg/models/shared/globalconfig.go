package shared

type GlobalConfig struct {
	AlertsEmails            []string        `json:"alertsEmails"`
	AlertsWebhooks          []Webhook       `json:"alertsWebhooks"`
	AnalyticsWebhooks       []Webhook       `json:"analyticsWebhooks"`
	APIReadOnly             bool            `json:"apiReadOnly"`
	AutoLinkToDefaultGroup  bool            `json:"autoLinkToDefaultGroup"`
	BackofficeAuth0Config   *Auth0Config    `json:"backofficeAuth0Config,omitempty"`
	CleverSettings          *CleverSettings `json:"cleverSettings,omitempty"`
	ElasticReadsConfig      *ElasticConfig  `json:"elasticReadsConfig,omitempty"`
	ElasticWritesConfigs    []ElasticConfig `json:"elasticWritesConfigs,omitempty"`
	EndlessIPAddresses      []string        `json:"endlessIpAddresses"`
	IPFiltering             IPFiltering     `json:"ipFiltering"`
	LimitConcurrentRequests bool            `json:"limitConcurrentRequests"`
	Lines                   []string        `json:"lines,omitempty"`
	MailerSettings          *MailerSettings `json:"mailerSettings,omitempty"`
	MaxConcurrentRequests   int64           `json:"maxConcurrentRequests"`
	MaxHttp10ResponseSize   *int64          `json:"maxHttp10ResponseSize,omitempty"`
	MaxLogsSize             *int32          `json:"maxLogsSize,omitempty"`
	MiddleFingers           *bool           `json:"middleFingers,omitempty"`
	PerIPThrottlingQuota    int64           `json:"perIpThrottlingQuota"`
	PrivateAppsAuth0Config  *Auth0Config    `json:"privateAppsAuth0Config,omitempty"`
	StreamEntityOnly        bool            `json:"streamEntityOnly"`
	ThrottlingQuota         int64           `json:"throttlingQuota"`
	U2fLoginOnly            bool            `json:"u2fLoginOnly"`
	UseCircuitBreakers      bool            `json:"useCircuitBreakers"`
}
