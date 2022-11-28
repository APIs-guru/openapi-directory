package shared

// InventorySourceGroupAssignedTargetingOptionDetails
// Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.
type InventorySourceGroupAssignedTargetingOptionDetails struct {
	InventorySourceGroupID *string `json:"inventorySourceGroupId,omitempty"`
}
