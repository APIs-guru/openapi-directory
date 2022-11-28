package shared

// InventorySourceGroup
// A collection of targetable inventory sources.
type InventorySourceGroup struct {
	DisplayName            *string `json:"displayName,omitempty"`
	InventorySourceGroupID *string `json:"inventorySourceGroupId,omitempty"`
	Name                   *string `json:"name,omitempty"`
}

// InventorySourceGroupInput
// A collection of targetable inventory sources.
type InventorySourceGroupInput struct {
	DisplayName *string `json:"displayName,omitempty"`
}
