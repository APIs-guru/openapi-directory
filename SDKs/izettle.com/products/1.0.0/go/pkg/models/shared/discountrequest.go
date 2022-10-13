package shared

type DiscountRequest struct {
	Amount            *Price   `json:"amount"`
	Description       *string  `json:"description"`
	ExternalReference *string  `json:"externalReference"`
	ImageLookupKeys   []string `json:"imageLookupKeys"`
	Name              *string  `json:"name"`
	Percentage        *float64 `json:"percentage"`
	UUID              string   `json:"uuid"`
}
