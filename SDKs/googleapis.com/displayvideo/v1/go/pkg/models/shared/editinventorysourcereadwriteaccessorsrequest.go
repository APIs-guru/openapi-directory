package shared

// EditInventorySourceReadWriteAccessorsRequest
// Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
type EditInventorySourceReadWriteAccessorsRequest struct {
	AdvertisersUpdate *EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate `json:"advertisersUpdate,omitempty"`
	AssignPartner     *bool                                                          `json:"assignPartner,omitempty"`
	PartnerID         *string                                                        `json:"partnerId,omitempty"`
}
