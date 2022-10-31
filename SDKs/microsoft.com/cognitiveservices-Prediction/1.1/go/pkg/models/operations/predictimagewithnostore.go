package operations

import (
"openapi/pkg/models/shared")

type PredictImageWithNoStorePathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type PredictImageWithNoStoreQueryParams struct {
    Application *string `queryParam:"style=form,explode=true,name=application"`
    IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
    
}

type PredictImageWithNoStoreHeaders struct {
    PredictionKey string `header:"style=simple,explode=false,name=Prediction-Key"`
    
}

type PredictImageWithNoStoreRequestBodyImageData struct {
    Content []byte `multipartForm:"content"`
    ImageData string `multipartForm:"name=imageData"`
    
}

type PredictImageWithNoStoreRequestBody struct {
    ImageData PredictImageWithNoStoreRequestBodyImageData `multipartForm:"file"`
    
}

type PredictImageWithNoStoreRequest struct {
    PathParams PredictImageWithNoStorePathParams 
    QueryParams PredictImageWithNoStoreQueryParams 
    Headers PredictImageWithNoStoreHeaders 
    Request PredictImageWithNoStoreRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PredictImageWithNoStoreResponse struct {
    Body []byte 
    ContentType string 
    ImagePredictionResultModel *shared.ImagePredictionResultModel 
    StatusCode int64 
    
}

