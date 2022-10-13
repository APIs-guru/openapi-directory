package shared

type TestOrderPickupDetails struct {
	LocationCode          *string                              `json:"locationCode"`
	PickupLocationAddress *TestOrderAddress                    `json:"pickupLocationAddress"`
	PickupLocationType    *string                              `json:"pickupLocationType"`
	PickupPersons         []TestOrderPickupDetailsPickupPerson `json:"pickupPersons"`
}
