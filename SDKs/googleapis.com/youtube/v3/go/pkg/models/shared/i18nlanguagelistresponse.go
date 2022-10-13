package shared

type I18nLanguageListResponse struct {
	Etag      *string        `json:"etag"`
	EventID   *string        `json:"eventId"`
	Items     []I18nLanguage `json:"items"`
	Kind      *string        `json:"kind"`
	VisitorID *string        `json:"visitorId"`
}
