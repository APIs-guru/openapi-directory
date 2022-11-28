package shared

// Type
// A resource type supported by Deployment Manager.
type Type struct {
	Base        *BaseType        `json:"base,omitempty"`
	Description *string          `json:"description,omitempty"`
	ID          *string          `json:"id,omitempty"`
	InsertTime  *string          `json:"insertTime,omitempty"`
	Labels      []TypeLabelEntry `json:"labels,omitempty"`
	Name        *string          `json:"name,omitempty"`
	Operation   *Operation       `json:"operation,omitempty"`
	SelfLink    *string          `json:"selfLink,omitempty"`
}
