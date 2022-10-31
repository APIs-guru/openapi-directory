package shared



type EditInventorySourceReadWriteAccessorsRequest struct {
    AdvertisersUpdate *EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate `json:"advertisersUpdate,omitempty"`
    AssignPartner *bool `json:"assignPartner,omitempty"`
    PartnerID *string `json:"partnerId,omitempty"`
    
}

