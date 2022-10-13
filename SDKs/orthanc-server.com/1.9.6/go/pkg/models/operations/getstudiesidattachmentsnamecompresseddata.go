package operations

type GetStudiesIDAttachmentsNameCompressedDataPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetStudiesIDAttachmentsNameCompressedDataHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetStudiesIDAttachmentsNameCompressedDataRequest struct {
	PathParams GetStudiesIDAttachmentsNameCompressedDataPathParams
	Headers    GetStudiesIDAttachmentsNameCompressedDataHeaders
}

type GetStudiesIDAttachmentsNameCompressedDataResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
