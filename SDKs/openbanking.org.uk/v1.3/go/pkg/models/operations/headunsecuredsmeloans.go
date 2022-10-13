package operations

type HeadUnsecuredSmeLoansHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type HeadUnsecuredSmeLoansRequest struct {
	Headers HeadUnsecuredSmeLoansHeaders
}

type HeadUnsecuredSmeLoansResponse struct {
	ContentType string
	NoResponse  map[string]interface{}
	StatusCode  int64
}
