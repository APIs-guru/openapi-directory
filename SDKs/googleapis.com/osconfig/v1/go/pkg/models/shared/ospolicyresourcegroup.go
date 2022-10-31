package shared



type OsPolicyResourceGroup struct {
    InventoryFilters []OsPolicyInventoryFilter `json:"inventoryFilters,omitempty"`
    Resources []OsPolicyResource `json:"resources,omitempty"`
    
}

