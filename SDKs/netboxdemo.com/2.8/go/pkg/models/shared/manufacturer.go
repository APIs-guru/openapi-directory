package shared

type Manufacturer struct {
	Description        *string `json:"description,omitempty"`
	DevicetypeCount    *int64  `json:"devicetype_count,omitempty"`
	ID                 *int64  `json:"id,omitempty"`
	InventoryitemCount *int64  `json:"inventoryitem_count,omitempty"`
	Name               string  `json:"name"`
	PlatformCount      *int64  `json:"platform_count,omitempty"`
	Slug               string  `json:"slug"`
}
