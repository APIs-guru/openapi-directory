package operations

type GetSeriesIDAttachmentsNameCompressedSizePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSeriesIDAttachmentsNameCompressedSizeHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetSeriesIDAttachmentsNameCompressedSizeRequest struct {
	PathParams GetSeriesIDAttachmentsNameCompressedSizePathParams
	Headers    GetSeriesIDAttachmentsNameCompressedSizeHeaders
}

type GetSeriesIDAttachmentsNameCompressedSizeResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
