package operations

type PostInventoryTurnsHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostInventoryTurnsRequest struct {
	Headers PostInventoryTurnsHeaders
}

type PostInventoryTurnsResponse struct {
	ContentType string
	StatusCode  int64
}
