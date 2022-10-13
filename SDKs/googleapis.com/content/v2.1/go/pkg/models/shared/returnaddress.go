package shared

type ReturnAddress struct {
	Address         *ReturnAddressAddress `json:"address"`
	Country         *string               `json:"country"`
	Kind            *string               `json:"kind"`
	Label           *string               `json:"label"`
	PhoneNumber     *string               `json:"phoneNumber"`
	ReturnAddressID *string               `json:"returnAddressId"`
}
