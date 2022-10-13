package shared

type AddressVerificationData struct {
	Address      *PostalAddress `json:"address"`
	BusinessName *string        `json:"businessName"`
}
