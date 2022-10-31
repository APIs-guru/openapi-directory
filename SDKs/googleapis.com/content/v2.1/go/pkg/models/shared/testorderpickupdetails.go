package shared

type TestOrderPickupDetails struct {
	LocationCode          *string                              `json:"locationCode,omitempty"`
	PickupLocationAddress *TestOrderAddress                    `json:"pickupLocationAddress,omitempty"`
	PickupLocationType    *string                              `json:"pickupLocationType,omitempty"`
	PickupPersons         []TestOrderPickupDetailsPickupPerson `json:"pickupPersons,omitempty"`
}
