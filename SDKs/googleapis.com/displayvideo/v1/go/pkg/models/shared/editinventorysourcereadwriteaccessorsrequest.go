package shared

type EditInventorySourceReadWriteAccessorsRequest struct {
	AdvertisersUpdate *EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate `json:"advertisersUpdate"`
	AssignPartner     *bool                                                          `json:"assignPartner"`
	PartnerID         *string                                                        `json:"partnerId"`
}
