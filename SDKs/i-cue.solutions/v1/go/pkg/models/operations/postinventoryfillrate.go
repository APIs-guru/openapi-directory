package operations

type PostInventoryFillRateHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryFillRateRequest struct {
	Headers PostInventoryFillRateHeaders
}

type PostInventoryFillRateResponse struct {
	ContentType string
	StatusCode  int64
}
