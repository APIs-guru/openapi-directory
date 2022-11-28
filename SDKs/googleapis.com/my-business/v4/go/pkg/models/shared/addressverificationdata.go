package shared

// AddressVerificationData
// Display data for verifications through postcard.
type AddressVerificationData struct {
	Address      *PostalAddress `json:"address,omitempty"`
	BusinessName *string        `json:"businessName,omitempty"`
}
