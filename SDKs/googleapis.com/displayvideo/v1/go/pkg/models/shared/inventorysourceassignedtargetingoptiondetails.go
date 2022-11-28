package shared

// InventorySourceAssignedTargetingOptionDetails
// Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.
type InventorySourceAssignedTargetingOptionDetails struct {
	InventorySourceID *string `json:"inventorySourceId,omitempty"`
}
