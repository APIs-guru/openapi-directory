package shared

type ListInventorySourceGroupsResponse struct {
	InventorySourceGroups []InventorySourceGroup `json:"inventorySourceGroups"`
	NextPageToken         *string                `json:"nextPageToken"`
}
