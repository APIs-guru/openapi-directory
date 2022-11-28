package shared

// AddressVerificationData
// Display data for verifications through postcard.
type AddressVerificationData struct {
	Address                    *PostalAddress `json:"address,omitempty"`
	Business                   *string        `json:"business,omitempty"`
	ExpectedDeliveryDaysRegion *int32         `json:"expectedDeliveryDaysRegion,omitempty"`
}
