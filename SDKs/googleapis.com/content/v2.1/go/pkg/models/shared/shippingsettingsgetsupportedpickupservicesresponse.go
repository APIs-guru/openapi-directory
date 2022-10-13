package shared

type ShippingsettingsGetSupportedPickupServicesResponse struct {
	Kind           *string                       `json:"kind"`
	PickupServices []PickupServicesPickupService `json:"pickupServices"`
}
