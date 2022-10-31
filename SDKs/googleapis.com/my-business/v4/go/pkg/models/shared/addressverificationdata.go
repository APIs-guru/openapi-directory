package shared



type AddressVerificationData struct {
    Address *PostalAddress `json:"address,omitempty"`
    BusinessName *string `json:"businessName,omitempty"`
    
}

