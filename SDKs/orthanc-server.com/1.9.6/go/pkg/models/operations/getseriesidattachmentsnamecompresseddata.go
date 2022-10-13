package operations

type GetSeriesIDAttachmentsNameCompressedDataPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSeriesIDAttachmentsNameCompressedDataHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetSeriesIDAttachmentsNameCompressedDataRequest struct {
	PathParams GetSeriesIDAttachmentsNameCompressedDataPathParams
	Headers    GetSeriesIDAttachmentsNameCompressedDataHeaders
}

type GetSeriesIDAttachmentsNameCompressedDataResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
