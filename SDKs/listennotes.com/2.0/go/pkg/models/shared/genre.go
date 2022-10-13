package shared

type Genre struct {
	ID       *int64  `json:"id"`
	Name     *string `json:"name"`
	ParentID *int64  `json:"parent_id"`
}
