package operations

type PostPricingCostPlusPricingHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPricingCostPlusPricingRequest struct {
	Headers PostPricingCostPlusPricingHeaders
}

type PostPricingCostPlusPricingResponse struct {
	ContentType string
	StatusCode  int64
}
