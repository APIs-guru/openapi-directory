package shared

// GoogleCloudChannelV1Price
// Represents the price of the Offer.
type GoogleCloudChannelV1Price struct {
	BasePrice        *GoogleTypeMoney `json:"basePrice,omitempty"`
	Discount         *float64         `json:"discount,omitempty"`
	EffectivePrice   *GoogleTypeMoney `json:"effectivePrice,omitempty"`
	ExternalPriceURI *string          `json:"externalPriceUri,omitempty"`
}
