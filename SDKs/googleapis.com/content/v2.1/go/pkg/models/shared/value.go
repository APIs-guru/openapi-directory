package shared

type Value struct {
	CarrierRateName *string `json:"carrierRateName,omitempty"`
	FlatRate        *Price  `json:"flatRate,omitempty"`
	NoShipping      *bool   `json:"noShipping,omitempty"`
	PricePercentage *string `json:"pricePercentage,omitempty"`
	SubtableName    *string `json:"subtableName,omitempty"`
}
