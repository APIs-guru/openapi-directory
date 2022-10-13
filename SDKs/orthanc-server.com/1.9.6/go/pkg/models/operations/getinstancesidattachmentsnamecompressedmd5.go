package operations

type GetInstancesIDAttachmentsNameCompressedMd5PathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetInstancesIDAttachmentsNameCompressedMd5Headers struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetInstancesIDAttachmentsNameCompressedMd5Request struct {
	PathParams GetInstancesIDAttachmentsNameCompressedMd5PathParams
	Headers    GetInstancesIDAttachmentsNameCompressedMd5Headers
}

type GetInstancesIDAttachmentsNameCompressedMd5Response struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
