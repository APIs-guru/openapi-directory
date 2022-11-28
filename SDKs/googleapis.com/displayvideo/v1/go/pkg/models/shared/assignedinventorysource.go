package shared

// AssignedInventorySourceInput
// An assignment between a targetable inventory source and an inventory source group.
type AssignedInventorySourceInput struct {
	InventorySourceID *string `json:"inventorySourceId,omitempty"`
}

// AssignedInventorySource
// An assignment between a targetable inventory source and an inventory source group.
type AssignedInventorySource struct {
	AssignedInventorySourceID *string `json:"assignedInventorySourceId,omitempty"`
	InventorySourceID         *string `json:"inventorySourceId,omitempty"`
	Name                      *string `json:"name,omitempty"`
}
