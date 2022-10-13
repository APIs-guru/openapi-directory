package shared

type ListMeta struct {
	Continue        *string `json:"continue"`
	ResourceVersion *string `json:"resourceVersion"`
	SelfLink        *string `json:"selfLink"`
}
