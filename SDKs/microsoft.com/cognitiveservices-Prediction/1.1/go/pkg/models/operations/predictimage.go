package operations

import (
	"openapi/pkg/models/shared"
)

type PredictImagePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type PredictImageQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
}

type PredictImageHeaders struct {
	PredictionKey string `header:"name=Prediction-Key"`
}

type PredictImageRequestBodyImageData struct {
	Content   []byte `multipartForm:"content"`
	ImageData string `multipartForm:"name=imageData"`
}

type PredictImageRequestBody struct {
	ImageData PredictImageRequestBodyImageData `multipartForm:"file"`
}

type PredictImageRequest struct {
	PathParams  PredictImagePathParams
	QueryParams PredictImageQueryParams
	Headers     PredictImageHeaders
	Request     PredictImageRequestBody `request:"mediaType=multipart/form-data"`
}

type PredictImageResponse struct {
	Body                       []byte
	ContentType                string
	ImagePredictionResultModel *shared.ImagePredictionResultModel
	StatusCode                 int64
}
