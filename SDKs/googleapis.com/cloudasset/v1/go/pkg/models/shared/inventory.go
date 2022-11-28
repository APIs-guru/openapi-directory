package shared

// Inventory
// This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).
type Inventory struct {
	Items      map[string]Item `json:"items,omitempty"`
	Name       *string         `json:"name,omitempty"`
	OsInfo     *OsInfo         `json:"osInfo,omitempty"`
	UpdateTime *string         `json:"updateTime,omitempty"`
}
