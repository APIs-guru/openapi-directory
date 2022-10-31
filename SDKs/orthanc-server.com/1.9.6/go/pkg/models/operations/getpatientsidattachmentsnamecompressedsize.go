package operations

type GetPatientsIDAttachmentsNameCompressedSizePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetPatientsIDAttachmentsNameCompressedSizeHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetPatientsIDAttachmentsNameCompressedSizeRequest struct {
	PathParams GetPatientsIDAttachmentsNameCompressedSizePathParams
	Headers    GetPatientsIDAttachmentsNameCompressedSizeHeaders
}

type GetPatientsIDAttachmentsNameCompressedSizeResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
