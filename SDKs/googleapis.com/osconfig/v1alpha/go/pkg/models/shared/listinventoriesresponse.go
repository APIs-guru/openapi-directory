package shared

type ListInventoriesResponse struct {
	Inventories   []Inventory `json:"inventories,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
