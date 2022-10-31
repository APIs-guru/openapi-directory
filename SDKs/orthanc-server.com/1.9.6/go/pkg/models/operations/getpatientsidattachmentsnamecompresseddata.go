package operations

type GetPatientsIDAttachmentsNameCompressedDataPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetPatientsIDAttachmentsNameCompressedDataHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetPatientsIDAttachmentsNameCompressedDataRequest struct {
	PathParams GetPatientsIDAttachmentsNameCompressedDataPathParams
	Headers    GetPatientsIDAttachmentsNameCompressedDataHeaders
}

type GetPatientsIDAttachmentsNameCompressedDataResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
