package shared

// SizesListResponse
// Size List Response
type SizesListResponse struct {
	Kind  *string `json:"kind,omitempty"`
	Sizes []Size  `json:"sizes,omitempty"`
}
