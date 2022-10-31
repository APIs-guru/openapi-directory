package operations

type DeleteSeriesIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteSeriesIDAttachmentsNameHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type DeleteSeriesIDAttachmentsNameRequest struct {
	PathParams DeleteSeriesIDAttachmentsNamePathParams
	Headers    DeleteSeriesIDAttachmentsNameHeaders
}

type DeleteSeriesIDAttachmentsNameResponse struct {
	ContentType string
	StatusCode  int64
}
