package shared

type AddressVerificationData struct {
	Address                    *PostalAddress `json:"address"`
	Business                   *string        `json:"business"`
	ExpectedDeliveryDaysRegion *int32         `json:"expectedDeliveryDaysRegion"`
}
