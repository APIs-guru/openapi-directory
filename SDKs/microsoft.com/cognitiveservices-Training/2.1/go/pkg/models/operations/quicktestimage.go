package operations

import (
"openapi/pkg/models/shared")

type QuickTestImagePathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type QuickTestImageQueryParams struct {
    IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
    
}

type QuickTestImageHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type QuickTestImageRequestBodyImageData struct {
    Content []byte `multipartForm:"content"`
    ImageData string `multipartForm:"name=imageData"`
    
}

type QuickTestImageRequestBody struct {
    ImageData QuickTestImageRequestBodyImageData `multipartForm:"file"`
    
}

type QuickTestImageRequest struct {
    PathParams QuickTestImagePathParams 
    QueryParams QuickTestImageQueryParams 
    Headers QuickTestImageHeaders 
    Request QuickTestImageRequestBody `request:"mediaType=multipart/form-data"`
    
}

type QuickTestImageResponse struct {
    Body []byte 
    ContentType string 
    ImagePrediction *shared.ImagePrediction 
    StatusCode int64 
    
}

