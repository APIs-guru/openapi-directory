package shared

type ThumbnailSetResponse struct {
	Etag      *string            `json:"etag"`
	EventID   *string            `json:"eventId"`
	Items     []ThumbnailDetails `json:"items"`
	Kind      *string            `json:"kind"`
	VisitorID *string            `json:"visitorId"`
}
