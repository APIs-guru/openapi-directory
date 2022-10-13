package operations

type PutStudiesIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutStudiesIDAttachmentsNameHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type PutStudiesIDAttachmentsNameRequest struct {
	PathParams PutStudiesIDAttachmentsNamePathParams
	Headers    PutStudiesIDAttachmentsNameHeaders
	Request    []byte `request:"mediaType=application/octet-stream"`
}

type PutStudiesIDAttachmentsNameResponse struct {
	ContentType                                      string
	PutStudiesIDAttachmentsName200ApplicationJSONAny *interface{}
	StatusCode                                       int64
}
