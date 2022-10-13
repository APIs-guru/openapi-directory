package operations

type PostPricingCompetitivePricingHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPricingCompetitivePricingRequest struct {
	Headers PostPricingCompetitivePricingHeaders
}

type PostPricingCompetitivePricingResponse struct {
	ContentType string
	StatusCode  int64
}
