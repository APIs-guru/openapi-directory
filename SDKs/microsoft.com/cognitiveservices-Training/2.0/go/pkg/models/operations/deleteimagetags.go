package operations

type DeleteImageTagsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteImageTagsQueryParams struct {
	ImageIds []string `queryParam:"style=form,explode=false,name=imageIds"`
	TagIds   []string `queryParam:"style=form,explode=false,name=tagIds"`
}

type DeleteImageTagsHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type DeleteImageTagsRequest struct {
	PathParams  DeleteImageTagsPathParams
	QueryParams DeleteImageTagsQueryParams
	Headers     DeleteImageTagsHeaders
}

type DeleteImageTagsResponse struct {
	ContentType string
	StatusCode  int64
}
