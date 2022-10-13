package operations

type PostTargetExpressionByEnsgidRequest struct {
	Request string `request:"mediaType=application/json"`
}

type PostTargetExpressionByEnsgidResponse struct {
	ContentType string
	StatusCode  int64
}
