package shared

type EditGuaranteedOrderReadAccessorsRequest struct {
	AddedAdvertisers    []string `json:"addedAdvertisers"`
	PartnerID           *string  `json:"partnerId"`
	ReadAccessInherited *bool    `json:"readAccessInherited"`
	RemovedAdvertisers  []string `json:"removedAdvertisers"`
}
