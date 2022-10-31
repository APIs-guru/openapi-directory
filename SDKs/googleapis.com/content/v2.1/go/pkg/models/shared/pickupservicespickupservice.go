package shared

type PickupServicesPickupService struct {
	CarrierName *string `json:"carrierName,omitempty"`
	Country     *string `json:"country,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
}
