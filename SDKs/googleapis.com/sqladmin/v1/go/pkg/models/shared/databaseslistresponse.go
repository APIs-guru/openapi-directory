package shared

// DatabasesListResponse
// Database list response.
type DatabasesListResponse struct {
	Items []Database `json:"items,omitempty"`
	Kind  *string    `json:"kind,omitempty"`
}
