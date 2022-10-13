package shared

type EventTagsListResponse struct {
	EventTags []EventTag `json:"eventTags"`
	Kind      *string    `json:"kind"`
}
