package shared

type ListGroupItemsResponse struct {
	Errors *Errors     `json:"errors,omitempty"`
	Etag   *string     `json:"etag,omitempty"`
	Items  []GroupItem `json:"items,omitempty"`
	Kind   *string     `json:"kind,omitempty"`
}
