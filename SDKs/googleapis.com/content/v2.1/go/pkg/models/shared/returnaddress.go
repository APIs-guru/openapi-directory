package shared

// ReturnAddress
// Return address resource.
type ReturnAddress struct {
	Address         *ReturnAddressAddress `json:"address,omitempty"`
	Country         *string               `json:"country,omitempty"`
	Kind            *string               `json:"kind,omitempty"`
	Label           *string               `json:"label,omitempty"`
	PhoneNumber     *string               `json:"phoneNumber,omitempty"`
	ReturnAddressID *string               `json:"returnAddressId,omitempty"`
}
