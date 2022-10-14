package shared

type DatabasesListResponse struct {
	Items []Database `json:"items,omitempty"`
	Kind  *string    `json:"kind,omitempty"`
}
