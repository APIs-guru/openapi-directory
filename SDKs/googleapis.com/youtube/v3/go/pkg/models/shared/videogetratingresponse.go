package shared

type VideoGetRatingResponse struct {
	Etag      *string       `json:"etag,omitempty"`
	EventID   *string       `json:"eventId,omitempty"`
	Items     []VideoRating `json:"items,omitempty"`
	Kind      *string       `json:"kind,omitempty"`
	VisitorID *string       `json:"visitorId,omitempty"`
}
