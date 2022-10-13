package shared

type Address struct {
	Country             string  `json:"country"`
	Locality            string  `json:"locality"`
	PostOfficeBoxNumber *string `json:"post_office_box_number"`
	PostalCode          string  `json:"postal_code"`
	Region              *string `json:"region"`
	StreetAddress       string  `json:"street_address"`
}
