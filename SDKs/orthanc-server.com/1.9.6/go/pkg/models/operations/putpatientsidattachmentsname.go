package operations

type PutPatientsIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutPatientsIDAttachmentsNameHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type PutPatientsIDAttachmentsNameRequest struct {
	PathParams PutPatientsIDAttachmentsNamePathParams
	Headers    PutPatientsIDAttachmentsNameHeaders
	Request    []byte `request:"mediaType=application/octet-stream"`
}

type PutPatientsIDAttachmentsNameResponse struct {
	ContentType                                       string
	PutPatientsIDAttachmentsName200ApplicationJSONAny *interface{}
	StatusCode                                        int64
}
