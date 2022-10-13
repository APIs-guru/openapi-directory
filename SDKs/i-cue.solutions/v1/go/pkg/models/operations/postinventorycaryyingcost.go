package operations

type PostInventoryCaryyingCostHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryCaryyingCostRequest struct {
	Headers PostInventoryCaryyingCostHeaders
}

type PostInventoryCaryyingCostResponse struct {
	ContentType string
	StatusCode  int64
}
