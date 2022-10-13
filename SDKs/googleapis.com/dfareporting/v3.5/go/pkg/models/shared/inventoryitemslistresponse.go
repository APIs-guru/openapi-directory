package shared

type InventoryItemsListResponse struct {
	InventoryItems []InventoryItem `json:"inventoryItems"`
	Kind           *string         `json:"kind"`
	NextPageToken  *string         `json:"nextPageToken"`
}
