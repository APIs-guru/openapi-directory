package shared

type MembershipsLevelListResponse struct {
	Etag      *string            `json:"etag,omitempty"`
	EventID   *string            `json:"eventId,omitempty"`
	Items     []MembershipsLevel `json:"items,omitempty"`
	Kind      *string            `json:"kind,omitempty"`
	VisitorID *string            `json:"visitorId,omitempty"`
}
