package operations

type PostInventoryEoqHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryEoqRequest struct {
	Headers PostInventoryEoqHeaders
}

type PostInventoryEoqResponse struct {
	ContentType string
	StatusCode  int64
}
