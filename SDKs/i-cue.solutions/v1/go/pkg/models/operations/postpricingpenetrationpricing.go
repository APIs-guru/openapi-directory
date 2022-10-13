package operations

type PostPricingPenetrationPricingHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPricingPenetrationPricingRequest struct {
	Headers PostPricingPenetrationPricingHeaders
}

type PostPricingPenetrationPricingResponse struct {
	ContentType string
	StatusCode  int64
}
