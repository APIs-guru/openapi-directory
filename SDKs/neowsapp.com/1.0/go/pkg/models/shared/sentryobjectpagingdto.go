package shared

type SentryObjectPagingDto struct {
	Links         map[string]interface{}   `json:"links,omitempty"`
	Page          *PageMetaData            `json:"page,omitempty"`
	SentryObjects []SentryImpactRiskObject `json:"sentry_objects,omitempty"`
}
