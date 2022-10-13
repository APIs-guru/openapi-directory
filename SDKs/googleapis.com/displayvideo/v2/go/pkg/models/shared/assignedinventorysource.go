package shared

type AssignedInventorySource struct {
	AssignedInventorySourceID *string `json:"assignedInventorySourceId"`
	InventorySourceID         *string `json:"inventorySourceId"`
	Name                      *string `json:"name"`
}
