package shared

type Genre struct {
	ID       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	ParentID *int64  `json:"parent_id,omitempty"`
}
