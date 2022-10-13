package shared

type SimpleAddressType struct {
	City         *string `json:"city"`
	Line1        *string `json:"line1"`
	Line2        *string `json:"line2"`
	Line3        *string `json:"line3"`
	LocationName *string `json:"locationName"`
	State        *string `json:"state"`
	Zip          *string `json:"zip"`
}
