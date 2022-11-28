package shared

// ListMeta
// ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
type ListMeta struct {
	Continue        *string `json:"continue,omitempty"`
	ResourceVersion *string `json:"resourceVersion,omitempty"`
	SelfLink        *string `json:"selfLink,omitempty"`
}
