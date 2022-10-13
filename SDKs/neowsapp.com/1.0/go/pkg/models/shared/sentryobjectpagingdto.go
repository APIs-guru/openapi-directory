package shared

type SentryObjectPagingDto struct {
	Links         map[string]interface{}   `json:"links"`
	Page          *PageMetaData            `json:"page"`
	SentryObjects []SentryImpactRiskObject `json:"sentry_objects"`
}
