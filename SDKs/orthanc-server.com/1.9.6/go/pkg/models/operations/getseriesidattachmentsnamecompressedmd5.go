package operations

type GetSeriesIDAttachmentsNameCompressedMd5PathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSeriesIDAttachmentsNameCompressedMd5Headers struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetSeriesIDAttachmentsNameCompressedMd5Request struct {
	PathParams GetSeriesIDAttachmentsNameCompressedMd5PathParams
	Headers    GetSeriesIDAttachmentsNameCompressedMd5Headers
}

type GetSeriesIDAttachmentsNameCompressedMd5Response struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
