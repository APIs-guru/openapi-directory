package shared

// OwnerReference
// OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
type OwnerReference struct {
	APIVersion         *string `json:"apiVersion,omitempty"`
	BlockOwnerDeletion *bool   `json:"blockOwnerDeletion,omitempty"`
	Controller         *bool   `json:"controller,omitempty"`
	Kind               *string `json:"kind,omitempty"`
	Name               *string `json:"name,omitempty"`
	UID                *string `json:"uid,omitempty"`
}
