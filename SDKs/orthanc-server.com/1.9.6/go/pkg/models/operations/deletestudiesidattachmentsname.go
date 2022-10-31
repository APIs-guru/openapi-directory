package operations

type DeleteStudiesIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteStudiesIDAttachmentsNameHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type DeleteStudiesIDAttachmentsNameRequest struct {
	PathParams DeleteStudiesIDAttachmentsNamePathParams
	Headers    DeleteStudiesIDAttachmentsNameHeaders
}

type DeleteStudiesIDAttachmentsNameResponse struct {
	ContentType string
	StatusCode  int64
}
