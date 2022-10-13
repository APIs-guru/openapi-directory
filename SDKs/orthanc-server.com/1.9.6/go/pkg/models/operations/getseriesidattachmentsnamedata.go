package operations

type GetSeriesIDAttachmentsNameDataPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSeriesIDAttachmentsNameDataHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type GetSeriesIDAttachmentsNameDataRequest struct {
	PathParams GetSeriesIDAttachmentsNameDataPathParams
	Headers    GetSeriesIDAttachmentsNameDataHeaders
}

type GetSeriesIDAttachmentsNameDataResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
