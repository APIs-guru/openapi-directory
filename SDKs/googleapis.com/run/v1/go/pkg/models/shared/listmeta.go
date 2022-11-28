package shared

// ListMeta
// Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
type ListMeta struct {
	Continue        *string `json:"continue,omitempty"`
	ResourceVersion *string `json:"resourceVersion,omitempty"`
	SelfLink        *string `json:"selfLink,omitempty"`
}
