package shared

// Value
// The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
type Value struct {
	CarrierRateName *string `json:"carrierRateName,omitempty"`
	FlatRate        *Price  `json:"flatRate,omitempty"`
	NoShipping      *bool   `json:"noShipping,omitempty"`
	PricePercentage *string `json:"pricePercentage,omitempty"`
	SubtableName    *string `json:"subtableName,omitempty"`
}
