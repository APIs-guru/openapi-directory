package shared

// ListInventorySourceGroupsResponse
// Response message for InventorySourceGroupService.ListInventorySourceGroups.
type ListInventorySourceGroupsResponse struct {
	InventorySourceGroups []InventorySourceGroup `json:"inventorySourceGroups,omitempty"`
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
}
