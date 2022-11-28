package shared

// Type
// A resource type supported by Deployment Manager.
type Type struct {
	ID         *string    `json:"id,omitempty"`
	InsertTime *string    `json:"insertTime,omitempty"`
	Name       *string    `json:"name,omitempty"`
	Operation  *Operation `json:"operation,omitempty"`
	SelfLink   *string    `json:"selfLink,omitempty"`
}
