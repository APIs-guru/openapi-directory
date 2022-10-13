package operations

type DeleteTagPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TagID     string `pathParam:"style=simple,explode=false,name=tagId"`
}

type DeleteTagHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type DeleteTagRequest struct {
	PathParams DeleteTagPathParams
	Headers    DeleteTagHeaders
}

type DeleteTagResponse struct {
	ContentType string
	StatusCode  int64
}
