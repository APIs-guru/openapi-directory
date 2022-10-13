package operations

type GetSeriesIDAttachmentsNameIsCompressedPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSeriesIDAttachmentsNameIsCompressedHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetSeriesIDAttachmentsNameIsCompressedRequest struct {
	PathParams GetSeriesIDAttachmentsNameIsCompressedPathParams
	Headers    GetSeriesIDAttachmentsNameIsCompressedHeaders
}

type GetSeriesIDAttachmentsNameIsCompressedResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
