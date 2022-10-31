package operations

type PostInventoryCaryyingCostHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostInventoryCaryyingCostRequest struct {
	Headers PostInventoryCaryyingCostHeaders
}

type PostInventoryCaryyingCostResponse struct {
	ContentType string
	StatusCode  int64
}
