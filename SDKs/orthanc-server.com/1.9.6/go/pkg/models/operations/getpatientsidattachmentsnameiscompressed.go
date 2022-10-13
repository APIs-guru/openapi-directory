package operations

type GetPatientsIDAttachmentsNameIsCompressedPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetPatientsIDAttachmentsNameIsCompressedHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetPatientsIDAttachmentsNameIsCompressedRequest struct {
	PathParams GetPatientsIDAttachmentsNameIsCompressedPathParams
	Headers    GetPatientsIDAttachmentsNameIsCompressedHeaders
}

type GetPatientsIDAttachmentsNameIsCompressedResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
