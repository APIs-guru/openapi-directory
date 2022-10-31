package operations



type DeleteIterationPathParams struct {
    IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DeleteIterationHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type DeleteIterationRequest struct {
    PathParams DeleteIterationPathParams 
    Headers DeleteIterationHeaders 
    
}

type DeleteIterationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

