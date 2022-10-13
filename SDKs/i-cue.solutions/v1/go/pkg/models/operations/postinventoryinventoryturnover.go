package operations

type PostInventoryInventoryTurnoverHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryInventoryTurnoverRequest struct {
	Headers PostInventoryInventoryTurnoverHeaders
}

type PostInventoryInventoryTurnoverResponse struct {
	ContentType string
	StatusCode  int64
}
