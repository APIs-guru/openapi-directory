package shared

type OsPolicyResourceGroup struct {
	InventoryFilters []OsPolicyInventoryFilter `json:"inventoryFilters"`
	Resources        []OsPolicyResource        `json:"resources"`
}
