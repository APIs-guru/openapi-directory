package shared

type ListInventorySourceGroupsResponse struct {
	InventorySourceGroups []InventorySourceGroup `json:"inventorySourceGroups,omitempty"`
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
}
