package shared

type I18nRegionListResponse struct {
	Etag      *string      `json:"etag,omitempty"`
	EventID   *string      `json:"eventId,omitempty"`
	Items     []I18nRegion `json:"items,omitempty"`
	Kind      *string      `json:"kind,omitempty"`
	VisitorID *string      `json:"visitorId,omitempty"`
}
