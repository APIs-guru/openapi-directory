package shared

type ShippingsettingsGetSupportedPickupServicesResponse struct {
	Kind           *string                       `json:"kind,omitempty"`
	PickupServices []PickupServicesPickupService `json:"pickupServices,omitempty"`
}
