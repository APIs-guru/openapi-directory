package operations

type PostInventoryOptimalServiceLevelHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryOptimalServiceLevelRequest struct {
	Headers PostInventoryOptimalServiceLevelHeaders
}

type PostInventoryOptimalServiceLevelResponse struct {
	ContentType string
	StatusCode  int64
}
