package shared

type ChannelSectionListResponse struct {
	Etag      *string          `json:"etag"`
	EventID   *string          `json:"eventId"`
	Items     []ChannelSection `json:"items"`
	Kind      *string          `json:"kind"`
	VisitorID *string          `json:"visitorId"`
}
