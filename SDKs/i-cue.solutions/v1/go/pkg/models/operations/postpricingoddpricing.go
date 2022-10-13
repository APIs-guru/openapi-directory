package operations

type PostPricingOddPricingHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPricingOddPricingRequest struct {
	Headers PostPricingOddPricingHeaders
}

type PostPricingOddPricingResponse struct {
	ContentType string
	StatusCode  int64
}
