package shared

type I18nLanguageListResponse struct {
	Etag      *string        `json:"etag,omitempty"`
	EventID   *string        `json:"eventId,omitempty"`
	Items     []I18nLanguage `json:"items,omitempty"`
	Kind      *string        `json:"kind,omitempty"`
	VisitorID *string        `json:"visitorId,omitempty"`
}
