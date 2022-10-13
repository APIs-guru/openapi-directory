package shared

type I18nRegionListResponse struct {
	Etag      *string      `json:"etag"`
	EventID   *string      `json:"eventId"`
	Items     []I18nRegion `json:"items"`
	Kind      *string      `json:"kind"`
	VisitorID *string      `json:"visitorId"`
}
