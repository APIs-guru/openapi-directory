package operations

type GetStudiesIDAttachmentsNameMd5PathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetStudiesIDAttachmentsNameMd5Headers struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetStudiesIDAttachmentsNameMd5Request struct {
	PathParams GetStudiesIDAttachmentsNameMd5PathParams
	Headers    GetStudiesIDAttachmentsNameMd5Headers
}

type GetStudiesIDAttachmentsNameMd5Response struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
