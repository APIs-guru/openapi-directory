package shared

type VideoGetRatingResponse struct {
	Etag      *string       `json:"etag"`
	EventID   *string       `json:"eventId"`
	Items     []VideoRating `json:"items"`
	Kind      *string       `json:"kind"`
	VisitorID *string       `json:"visitorId"`
}
