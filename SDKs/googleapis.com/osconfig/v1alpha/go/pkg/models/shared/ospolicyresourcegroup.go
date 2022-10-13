package shared

type OsPolicyResourceGroup struct {
	InventoryFilters []OsPolicyInventoryFilter `json:"inventoryFilters"`
	OsFilter         *OsPolicyOsFilter         `json:"osFilter"`
	Resources        []OsPolicyResource        `json:"resources"`
}
