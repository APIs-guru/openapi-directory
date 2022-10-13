package operations

type PostInventoryLtdHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryLtdRequest struct {
	Headers PostInventoryLtdHeaders
}

type PostInventoryLtdResponse struct {
	ContentType string
	StatusCode  int64
}
