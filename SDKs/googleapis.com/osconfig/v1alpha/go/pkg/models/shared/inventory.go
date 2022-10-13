package shared

type Inventory struct {
	Items      map[string]InventoryItem `json:"items"`
	Name       *string                  `json:"name"`
	OsInfo     *InventoryOsInfo         `json:"osInfo"`
	UpdateTime *string                  `json:"updateTime"`
}
