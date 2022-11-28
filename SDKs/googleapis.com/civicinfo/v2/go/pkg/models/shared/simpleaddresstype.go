package shared

// SimpleAddressType
// A simple representation of an address.
type SimpleAddressType struct {
	City         *string `json:"city,omitempty"`
	Line1        *string `json:"line1,omitempty"`
	Line2        *string `json:"line2,omitempty"`
	Line3        *string `json:"line3,omitempty"`
	LocationName *string `json:"locationName,omitempty"`
	State        *string `json:"state,omitempty"`
	Zip          *string `json:"zip,omitempty"`
}
