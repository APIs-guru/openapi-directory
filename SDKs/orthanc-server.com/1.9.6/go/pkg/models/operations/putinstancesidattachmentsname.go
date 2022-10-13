package operations

type PutInstancesIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutInstancesIDAttachmentsNameHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type PutInstancesIDAttachmentsNameRequest struct {
	PathParams PutInstancesIDAttachmentsNamePathParams
	Headers    PutInstancesIDAttachmentsNameHeaders
	Request    []byte `request:"mediaType=application/octet-stream"`
}

type PutInstancesIDAttachmentsNameResponse struct {
	ContentType                                        string
	PutInstancesIDAttachmentsName200ApplicationJSONAny *interface{}
	StatusCode                                         int64
}
