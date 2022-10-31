package shared

type PageCategory struct {
	ID       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	Position *int64  `json:"position,omitempty"`
}
