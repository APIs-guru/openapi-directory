package shared

type PropertyList struct {
	Etag     *string    `json:"etag"`
	Items    []Property `json:"items"`
	Kind     *string    `json:"kind"`
	SelfLink *string    `json:"selfLink"`
}
