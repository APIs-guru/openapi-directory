package operations

type GetCacheHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
	IfNoneMatch     *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetCacheRequest struct {
	Headers GetCacheHeaders
}

type GetCacheResponse struct {
	ContentType string
	StatusCode  int64
}
