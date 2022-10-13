package operations

type PostInventoryReorderPointHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryReorderPointRequest struct {
	Headers PostInventoryReorderPointHeaders
}

type PostInventoryReorderPointResponse struct {
	ContentType string
	StatusCode  int64
}
