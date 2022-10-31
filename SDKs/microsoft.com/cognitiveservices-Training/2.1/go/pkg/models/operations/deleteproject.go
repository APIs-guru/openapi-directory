package operations

type DeleteProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteProjectHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type DeleteProjectRequest struct {
	PathParams DeleteProjectPathParams
	Headers    DeleteProjectHeaders
}

type DeleteProjectResponse struct {
	ContentType string
	StatusCode  int64
}
