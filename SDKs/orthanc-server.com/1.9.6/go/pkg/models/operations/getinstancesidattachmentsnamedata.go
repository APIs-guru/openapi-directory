package operations

type GetInstancesIDAttachmentsNameDataPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetInstancesIDAttachmentsNameDataHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetInstancesIDAttachmentsNameDataRequest struct {
	PathParams GetInstancesIDAttachmentsNameDataPathParams
	Headers    GetInstancesIDAttachmentsNameDataHeaders
}

type GetInstancesIDAttachmentsNameDataResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
