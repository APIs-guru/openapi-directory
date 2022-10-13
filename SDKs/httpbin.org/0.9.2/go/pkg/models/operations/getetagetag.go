package operations

type GetEtagEtagPathParams struct {
	Etag string `pathParam:"style=simple,explode=false,name=etag"`
}

type GetEtagEtagHeaders struct {
	IfMatch     *string `header:"name=If-Match"`
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetEtagEtagRequest struct {
	PathParams GetEtagEtagPathParams
	Headers    GetEtagEtagHeaders
}

type GetEtagEtagResponse struct {
	ContentType string
	StatusCode  int64
}
