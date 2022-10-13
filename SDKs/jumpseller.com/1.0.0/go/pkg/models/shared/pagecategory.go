package shared

type PageCategory struct {
	ID       *int64  `json:"id"`
	Name     *string `json:"name"`
	Position *int64  `json:"position"`
}
