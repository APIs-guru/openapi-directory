package shared

type EditGuaranteedOrderReadAccessorsRequest struct {
	AddedAdvertisers    []string `json:"addedAdvertisers,omitempty"`
	PartnerID           *string  `json:"partnerId,omitempty"`
	ReadAccessInherited *bool    `json:"readAccessInherited,omitempty"`
	RemovedAdvertisers  []string `json:"removedAdvertisers,omitempty"`
}
