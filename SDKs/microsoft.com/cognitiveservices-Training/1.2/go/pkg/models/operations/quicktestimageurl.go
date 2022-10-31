package operations

import (
"openapi/pkg/models/shared")

type QuickTestImageURLPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type QuickTestImageURLQueryParams struct {
    IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
    
}

type QuickTestImageURLHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type QuickTestImageURLRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ImageURL *shared.ImageURL `request:"mediaType=application/json"`
    ImageUrl1 *shared.ImageURL `request:"mediaType=application/x-www-form-urlencoded"`
    ImageUrl2 *shared.ImageURL `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type QuickTestImageURLRequest struct {
    PathParams QuickTestImageURLPathParams 
    QueryParams QuickTestImageURLQueryParams 
    Headers QuickTestImageURLHeaders 
    Request QuickTestImageURLRequests 
    
}

type QuickTestImageURLResponse struct {
    Body []byte 
    ContentType string 
    ImagePredictionResult *shared.ImagePredictionResult 
    StatusCode int64 
    
}

