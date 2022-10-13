package shared

type ListInventoriesResponse struct {
	Inventories   []Inventory `json:"inventories"`
	NextPageToken *string     `json:"nextPageToken"`
}
