package operations

type GetCacheHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type GetCacheRequest struct {
	Headers GetCacheHeaders
}

type GetCacheResponse struct {
	ContentType string
	StatusCode  int64
}
