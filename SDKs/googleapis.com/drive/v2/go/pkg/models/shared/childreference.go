package shared

type ChildReference struct {
	ChildLink *string `json:"childLink,omitempty"`
	ID        *string `json:"id,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	SelfLink  *string `json:"selfLink,omitempty"`
}
