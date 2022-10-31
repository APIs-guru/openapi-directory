package shared



type InventorySourceAccessors struct {
    Advertisers *InventorySourceAccessorsAdvertiserAccessors `json:"advertisers,omitempty"`
    Partner *InventorySourceAccessorsPartnerAccessor `json:"partner,omitempty"`
    
}

