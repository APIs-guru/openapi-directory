package shared

type ParentList struct {
	Etag     *string           `json:"etag"`
	Items    []ParentReference `json:"items"`
	Kind     *string           `json:"kind"`
	SelfLink *string           `json:"selfLink"`
}
