package operations

type GetInstancesIDAttachmentsNameIsCompressedPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetInstancesIDAttachmentsNameIsCompressedHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetInstancesIDAttachmentsNameIsCompressedRequest struct {
	PathParams GetInstancesIDAttachmentsNameIsCompressedPathParams
	Headers    GetInstancesIDAttachmentsNameIsCompressedHeaders
}

type GetInstancesIDAttachmentsNameIsCompressedResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
