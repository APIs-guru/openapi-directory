package shared

type InventoryItem struct {
	AssetTag     *string             `json:"asset_tag"`
	Description  *string             `json:"description"`
	Device       NestedDevice        `json:"device"`
	Discovered   *bool               `json:"discovered"`
	ID           *int64              `json:"id"`
	Manufacturer *NestedManufacturer `json:"manufacturer"`
	Name         string              `json:"name"`
	Parent       *int64              `json:"parent"`
	PartID       *string             `json:"part_id"`
	Serial       *string             `json:"serial"`
	Tags         []string            `json:"tags"`
}
