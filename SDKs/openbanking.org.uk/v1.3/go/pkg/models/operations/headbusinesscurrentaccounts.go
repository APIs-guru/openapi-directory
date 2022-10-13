package operations

type HeadBusinessCurrentAccountsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type HeadBusinessCurrentAccountsRequest struct {
	Headers HeadBusinessCurrentAccountsHeaders
}

type HeadBusinessCurrentAccountsResponse struct {
	ContentType string
	NoResponse  map[string]interface{}
	StatusCode  int64
}
