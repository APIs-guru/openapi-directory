package shared

// OwnerReference
// This is not supported or used by Cloud Run.
type OwnerReference struct {
	APIVersion         *string `json:"apiVersion,omitempty"`
	BlockOwnerDeletion *bool   `json:"blockOwnerDeletion,omitempty"`
	Controller         *bool   `json:"controller,omitempty"`
	Kind               *string `json:"kind,omitempty"`
	Name               *string `json:"name,omitempty"`
	UID                *string `json:"uid,omitempty"`
}
