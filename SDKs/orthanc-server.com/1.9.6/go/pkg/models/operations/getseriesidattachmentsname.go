package operations

type GetSeriesIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSeriesIDAttachmentsNameHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetSeriesIDAttachmentsNameRequest struct {
	PathParams GetSeriesIDAttachmentsNamePathParams
	Headers    GetSeriesIDAttachmentsNameHeaders
}

type GetSeriesIDAttachmentsNameResponse struct {
	ContentType                                     string
	GetSeriesIDAttachmentsName200ApplicationJSONAny *interface{}
	Headers                                         map[string][]string
	StatusCode                                      int64
}
