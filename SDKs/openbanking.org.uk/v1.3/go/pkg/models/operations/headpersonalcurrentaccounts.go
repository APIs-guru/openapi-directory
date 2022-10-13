package operations

type HeadPersonalCurrentAccountsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type HeadPersonalCurrentAccountsRequest struct {
	Headers HeadPersonalCurrentAccountsHeaders
}

type HeadPersonalCurrentAccountsResponse struct {
	ContentType string
	NoResponse  map[string]interface{}
	StatusCode  int64
}
