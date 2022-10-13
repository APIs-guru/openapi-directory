package operations

type PostInventoryTurnsHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryTurnsRequest struct {
	Headers PostInventoryTurnsHeaders
}

type PostInventoryTurnsResponse struct {
	ContentType string
	StatusCode  int64
}
