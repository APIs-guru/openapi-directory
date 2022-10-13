package shared

type MembershipsLevelListResponse struct {
	Etag      *string            `json:"etag"`
	EventID   *string            `json:"eventId"`
	Items     []MembershipsLevel `json:"items"`
	Kind      *string            `json:"kind"`
	VisitorID *string            `json:"visitorId"`
}
