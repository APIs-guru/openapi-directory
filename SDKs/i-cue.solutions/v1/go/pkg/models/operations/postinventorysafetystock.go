package operations

type PostInventorySafetyStockHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventorySafetyStockRequest struct {
	Headers PostInventorySafetyStockHeaders
}

type PostInventorySafetyStockResponse struct {
	ContentType string
	StatusCode  int64
}
