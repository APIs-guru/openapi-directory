package shared

type CategoryEditFields struct {
	Name     *string `json:"name,omitempty"`
	ParentID *int32  `json:"parent_id,omitempty"`
}
