package shared

type PartnerStoreStatusStatus struct {
	Message    *string `json:"message"`
	Percentage *string `json:"percentage"`
}

type PartnerStoreStatus struct {
	Status *PartnerStoreStatusStatus `json:"status"`
}
