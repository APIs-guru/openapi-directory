package shared

type ChildReference struct {
	ChildLink *string `json:"childLink"`
	ID        *string `json:"id"`
	Kind      *string `json:"kind"`
	SelfLink  *string `json:"selfLink"`
}
