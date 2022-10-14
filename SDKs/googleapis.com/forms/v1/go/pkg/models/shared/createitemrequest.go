package shared

type CreateItemRequest struct {
	Item     *Item     `json:"item,omitempty"`
	Location *Location `json:"location,omitempty"`
}
