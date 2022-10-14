package shared

type OsPolicyResourceGroup struct {
	InventoryFilters []OsPolicyInventoryFilter `json:"inventoryFilters,omitempty"`
	OsFilter         *OsPolicyOsFilter         `json:"osFilter,omitempty"`
	Resources        []OsPolicyResource        `json:"resources,omitempty"`
}
