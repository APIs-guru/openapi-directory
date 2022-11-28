package shared

// InventorySourceAccessors
// The partner or advertisers with access to the inventory source.
type InventorySourceAccessors struct {
	Advertisers *InventorySourceAccessorsAdvertiserAccessors `json:"advertisers,omitempty"`
	Partner     *InventorySourceAccessorsPartnerAccessor     `json:"partner,omitempty"`
}
