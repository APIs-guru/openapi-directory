package shared

type CategoryEditFields struct {
	Name     *string `json:"name"`
	ParentID *int32  `json:"parent_id"`
}
