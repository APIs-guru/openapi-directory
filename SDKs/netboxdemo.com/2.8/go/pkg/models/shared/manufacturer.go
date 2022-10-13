package shared

type Manufacturer struct {
	Description        *string `json:"description"`
	DevicetypeCount    *int64  `json:"devicetype_count"`
	ID                 *int64  `json:"id"`
	InventoryitemCount *int64  `json:"inventoryitem_count"`
	Name               string  `json:"name"`
	PlatformCount      *int64  `json:"platform_count"`
	Slug               string  `json:"slug"`
}
