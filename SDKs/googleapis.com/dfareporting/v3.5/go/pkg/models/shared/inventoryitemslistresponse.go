package shared

type InventoryItemsListResponse struct {
	InventoryItems []InventoryItem `json:"inventoryItems,omitempty"`
	Kind           *string         `json:"kind,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
