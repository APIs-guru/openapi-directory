package operations

import (
"openapi/pkg/models/shared")

type CreateImagesFromDataPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type CreateImagesFromDataQueryParams struct {
    TagIds []string `queryParam:"style=form,explode=false,name=tagIds"`
    
}

type CreateImagesFromDataHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type CreateImagesFromDataRequestBodyImageData struct {
    Content []byte `multipartForm:"content"`
    ImageData string `multipartForm:"name=imageData"`
    
}

type CreateImagesFromDataRequestBody struct {
    ImageData CreateImagesFromDataRequestBodyImageData `multipartForm:"file"`
    
}

type CreateImagesFromDataRequest struct {
    PathParams CreateImagesFromDataPathParams 
    QueryParams CreateImagesFromDataQueryParams 
    Headers CreateImagesFromDataHeaders 
    Request CreateImagesFromDataRequestBody `request:"mediaType=multipart/form-data"`
    
}

type CreateImagesFromDataResponse struct {
    Body []byte 
    ContentType string 
    ImageCreateSummary *shared.ImageCreateSummary 
    StatusCode int64 
    
}

