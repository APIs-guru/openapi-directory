package operations

type DeleteInstancesIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteInstancesIDAttachmentsNameHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type DeleteInstancesIDAttachmentsNameRequest struct {
	PathParams DeleteInstancesIDAttachmentsNamePathParams
	Headers    DeleteInstancesIDAttachmentsNameHeaders
}

type DeleteInstancesIDAttachmentsNameResponse struct {
	ContentType string
	StatusCode  int64
}
