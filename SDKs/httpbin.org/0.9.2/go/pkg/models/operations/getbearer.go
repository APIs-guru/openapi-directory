package operations

type GetBearerHeaders struct {
	Authorization *string `header:"name=Authorization"`
}

type GetBearerRequest struct {
	Headers GetBearerHeaders
}

type GetBearerResponse struct {
	ContentType string
	StatusCode  int64
}
