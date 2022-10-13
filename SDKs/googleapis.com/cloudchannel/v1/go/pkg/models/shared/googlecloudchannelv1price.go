package shared

type GoogleCloudChannelV1Price struct {
	BasePrice        *GoogleTypeMoney `json:"basePrice"`
	Discount         *float64         `json:"discount"`
	EffectivePrice   *GoogleTypeMoney `json:"effectivePrice"`
	ExternalPriceURI *string          `json:"externalPriceUri"`
}
