package shared

// EditGuaranteedOrderReadAccessorsRequest
// Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
type EditGuaranteedOrderReadAccessorsRequest struct {
	AddedAdvertisers    []string `json:"addedAdvertisers,omitempty"`
	PartnerID           *string  `json:"partnerId,omitempty"`
	ReadAccessInherited *bool    `json:"readAccessInherited,omitempty"`
	RemovedAdvertisers  []string `json:"removedAdvertisers,omitempty"`
}
