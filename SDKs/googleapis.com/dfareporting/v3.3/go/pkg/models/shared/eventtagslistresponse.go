package shared

// EventTagsListResponse
// Event Tag List Response
type EventTagsListResponse struct {
	EventTags []EventTag `json:"eventTags,omitempty"`
	Kind      *string    `json:"kind,omitempty"`
}
