package shared

type ListInventorySourcesResponse struct {
	InventorySources []InventorySource `json:"inventorySources"`
	NextPageToken    *string           `json:"nextPageToken"`
}
