package shared

type ParentReference struct {
	ID         *string `json:"id"`
	IsRoot     *bool   `json:"isRoot"`
	Kind       *string `json:"kind"`
	ParentLink *string `json:"parentLink"`
	SelfLink   *string `json:"selfLink"`
}
