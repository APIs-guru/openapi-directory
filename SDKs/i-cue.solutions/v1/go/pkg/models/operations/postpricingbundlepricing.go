package operations

type PostPricingBundlePricingHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPricingBundlePricingRequest struct {
	Headers PostPricingBundlePricingHeaders
}

type PostPricingBundlePricingResponse struct {
	ContentType string
	StatusCode  int64
}
