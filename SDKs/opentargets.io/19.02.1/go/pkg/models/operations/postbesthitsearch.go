package operations

type PostBestHitSearchRequest struct {
	Request string `request:"mediaType=application/json"`
}

type PostBestHitSearchResponse struct {
	ContentType string
	StatusCode  int64
}
