package operations

type PostInventoryMoqHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryMoqRequest struct {
	Headers PostInventoryMoqHeaders
}

type PostInventoryMoqResponse struct {
	ContentType string
	StatusCode  int64
}
