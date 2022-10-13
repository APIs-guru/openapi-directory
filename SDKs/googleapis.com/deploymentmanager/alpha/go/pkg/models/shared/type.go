package shared

type Type struct {
	Base        *BaseType        `json:"base"`
	Description *string          `json:"description"`
	ID          *string          `json:"id"`
	InsertTime  *string          `json:"insertTime"`
	Labels      []TypeLabelEntry `json:"labels"`
	Name        *string          `json:"name"`
	Operation   *Operation       `json:"operation"`
	SelfLink    *string          `json:"selfLink"`
}
