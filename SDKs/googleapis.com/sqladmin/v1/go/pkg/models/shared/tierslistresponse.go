package shared

// TiersListResponse
// Tiers list response.
type TiersListResponse struct {
	Items []Tier  `json:"items,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}
