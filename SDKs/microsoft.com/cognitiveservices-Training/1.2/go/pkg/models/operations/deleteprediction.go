package operations

type DeletePredictionPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeletePredictionQueryParams struct {
	Ids []string `queryParam:"style=form,explode=false,name=ids"`
}

type DeletePredictionHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type DeletePredictionRequest struct {
	PathParams  DeletePredictionPathParams
	QueryParams DeletePredictionQueryParams
	Headers     DeletePredictionHeaders
}

type DeletePredictionResponse struct {
	ContentType string
	StatusCode  int64
}
