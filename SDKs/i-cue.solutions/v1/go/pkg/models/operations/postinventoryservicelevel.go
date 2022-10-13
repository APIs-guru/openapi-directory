package operations

type PostInventoryServiceLevelHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryServiceLevelRequest struct {
	Headers PostInventoryServiceLevelHeaders
}

type PostInventoryServiceLevelResponse struct {
	ContentType string
	StatusCode  int64
}
