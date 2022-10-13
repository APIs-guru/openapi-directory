package shared

type Value struct {
	CarrierRateName *string `json:"carrierRateName"`
	FlatRate        *Price  `json:"flatRate"`
	NoShipping      *bool   `json:"noShipping"`
	PricePercentage *string `json:"pricePercentage"`
	SubtableName    *string `json:"subtableName"`
}
