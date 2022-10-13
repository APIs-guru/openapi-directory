package operations

type HeadBranchesHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type HeadBranchesRequest struct {
	Headers HeadBranchesHeaders
}

type HeadBranchesResponse struct {
	ContentType string
	NoResponse  map[string]interface{}
	StatusCode  int64
}
