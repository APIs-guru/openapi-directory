package operations

type PostInventoryMoqHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostInventoryMoqRequest struct {
	Headers PostInventoryMoqHeaders
}

type PostInventoryMoqResponse struct {
	ContentType string
	StatusCode  int64
}
