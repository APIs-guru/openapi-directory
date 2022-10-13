package operations

type DeletePatientsIDAttachmentsNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeletePatientsIDAttachmentsNameHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type DeletePatientsIDAttachmentsNameRequest struct {
	PathParams DeletePatientsIDAttachmentsNamePathParams
	Headers    DeletePatientsIDAttachmentsNameHeaders
}

type DeletePatientsIDAttachmentsNameResponse struct {
	ContentType string
	StatusCode  int64
}
