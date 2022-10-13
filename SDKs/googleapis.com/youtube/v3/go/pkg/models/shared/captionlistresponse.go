package shared

type CaptionListResponse struct {
	Etag      *string   `json:"etag"`
	EventID   *string   `json:"eventId"`
	Items     []Caption `json:"items"`
	Kind      *string   `json:"kind"`
	VisitorID *string   `json:"visitorId"`
}
