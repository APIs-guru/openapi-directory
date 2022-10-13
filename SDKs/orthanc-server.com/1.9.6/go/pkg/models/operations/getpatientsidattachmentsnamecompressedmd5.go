package operations

type GetPatientsIDAttachmentsNameCompressedMd5PathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetPatientsIDAttachmentsNameCompressedMd5Headers struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetPatientsIDAttachmentsNameCompressedMd5Request struct {
	PathParams GetPatientsIDAttachmentsNameCompressedMd5PathParams
	Headers    GetPatientsIDAttachmentsNameCompressedMd5Headers
}

type GetPatientsIDAttachmentsNameCompressedMd5Response struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
