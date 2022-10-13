package shared

type ListGroupItemsResponse struct {
	Errors *Errors     `json:"errors"`
	Etag   *string     `json:"etag"`
	Items  []GroupItem `json:"items"`
	Kind   *string     `json:"kind"`
}
