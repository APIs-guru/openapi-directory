package operations



type DeleteImagesPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DeleteImagesQueryParams struct {
    ImageIds []string `queryParam:"style=form,explode=false,name=imageIds"`
    
}

type DeleteImagesHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type DeleteImagesRequest struct {
    PathParams DeleteImagesPathParams 
    QueryParams DeleteImagesQueryParams 
    Headers DeleteImagesHeaders 
    
}

type DeleteImagesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

