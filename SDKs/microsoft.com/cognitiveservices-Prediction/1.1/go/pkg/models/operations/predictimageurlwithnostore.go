package operations

import (
"openapi/pkg/models/shared")

type PredictImageURLWithNoStorePathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type PredictImageURLWithNoStoreQueryParams struct {
    Application *string `queryParam:"style=form,explode=true,name=application"`
    IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
    
}

type PredictImageURLWithNoStoreHeaders struct {
    PredictionKey string `header:"style=simple,explode=false,name=Prediction-Key"`
    
}

type PredictImageURLWithNoStoreRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ImageURL *shared.ImageURL `request:"mediaType=application/json"`
    ImageUrl1 *shared.ImageURL `request:"mediaType=application/x-www-form-urlencoded"`
    ImageUrl2 *shared.ImageURL `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type PredictImageURLWithNoStoreRequest struct {
    PathParams PredictImageURLWithNoStorePathParams 
    QueryParams PredictImageURLWithNoStoreQueryParams 
    Headers PredictImageURLWithNoStoreHeaders 
    Request PredictImageURLWithNoStoreRequests 
    
}

type PredictImageURLWithNoStoreResponse struct {
    Body []byte 
    ContentType string 
    ImagePredictionResultModel *shared.ImagePredictionResultModel 
    StatusCode int64 
    
}

