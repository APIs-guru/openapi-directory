package operations

import (
	"openapi/pkg/models/shared"
)

type PredictImageURLPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type PredictImageURLQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
}

type PredictImageURLHeaders struct {
	PredictionKey string `header:"name=Prediction-Key"`
}

type PredictImageURLRequests struct {
	ApplicationXML []byte           `request:"mediaType=application/xml"`
	ImageURL       *shared.ImageURL `request:"mediaType=application/json"`
	ImageUrl1      *shared.ImageURL `request:"mediaType=application/x-www-form-urlencoded"`
	ImageUrl2      *shared.ImageURL `request:"mediaType=text/json"`
	TextXML        []byte           `request:"mediaType=text/xml"`
}

type PredictImageURLRequest struct {
	PathParams  PredictImageURLPathParams
	QueryParams PredictImageURLQueryParams
	Headers     PredictImageURLHeaders
	Request     PredictImageURLRequests
}

type PredictImageURLResponse struct {
	Body                       []byte
	ContentType                string
	ImagePredictionResultModel *shared.ImagePredictionResultModel
	StatusCode                 int64
}
