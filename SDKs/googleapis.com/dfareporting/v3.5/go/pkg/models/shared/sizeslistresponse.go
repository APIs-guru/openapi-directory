package shared

type SizesListResponse struct {
	Kind  *string `json:"kind,omitempty"`
	Sizes []Size  `json:"sizes,omitempty"`
}
