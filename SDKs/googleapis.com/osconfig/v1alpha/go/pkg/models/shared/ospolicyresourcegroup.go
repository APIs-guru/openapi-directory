package shared

// OsPolicyResourceGroup
// Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
type OsPolicyResourceGroup struct {
	InventoryFilters []OsPolicyInventoryFilter `json:"inventoryFilters,omitempty"`
	OsFilter         *OsPolicyOsFilter         `json:"osFilter,omitempty"`
	Resources        []OsPolicyResource        `json:"resources,omitempty"`
}
