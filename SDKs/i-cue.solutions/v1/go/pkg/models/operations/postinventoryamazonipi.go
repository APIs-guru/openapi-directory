package operations

type PostInventoryAmazonIpiHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryAmazonIpiRequest struct {
	Headers PostInventoryAmazonIpiHeaders
}

type PostInventoryAmazonIpiResponse struct {
	ContentType string
	StatusCode  int64
}
