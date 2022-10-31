package operations

type PostPricingOddPricingHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostPricingOddPricingRequest struct {
	Headers PostPricingOddPricingHeaders
}

type PostPricingOddPricingResponse struct {
	ContentType string
	StatusCode  int64
}
