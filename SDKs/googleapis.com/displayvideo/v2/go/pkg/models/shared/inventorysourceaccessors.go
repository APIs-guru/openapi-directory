package shared

type InventorySourceAccessors struct {
	Advertisers *InventorySourceAccessorsAdvertiserAccessors `json:"advertisers"`
	Partner     *InventorySourceAccessorsPartnerAccessor     `json:"partner"`
}
