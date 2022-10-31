package shared

type Inventory struct {
	Items      map[string]InventoryItem `json:"items,omitempty"`
	Name       *string                  `json:"name,omitempty"`
	OsInfo     *InventoryOsInfo         `json:"osInfo,omitempty"`
	UpdateTime *string                  `json:"updateTime,omitempty"`
}
