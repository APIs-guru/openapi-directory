package shared

type CreateItemRequest struct {
	Item     *Item     `json:"item"`
	Location *Location `json:"location"`
}
