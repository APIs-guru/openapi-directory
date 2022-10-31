package operations

type PostInventoryInventoryTurnoverHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostInventoryInventoryTurnoverRequest struct {
	Headers PostInventoryInventoryTurnoverHeaders
}

type PostInventoryInventoryTurnoverResponse struct {
	ContentType string
	StatusCode  int64
}
