package operations

type GetStudiesIDAttachmentsNameCompressedMd5PathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetStudiesIDAttachmentsNameCompressedMd5Headers struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetStudiesIDAttachmentsNameCompressedMd5Request struct {
	PathParams GetStudiesIDAttachmentsNameCompressedMd5PathParams
	Headers    GetStudiesIDAttachmentsNameCompressedMd5Headers
}

type GetStudiesIDAttachmentsNameCompressedMd5Response struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
