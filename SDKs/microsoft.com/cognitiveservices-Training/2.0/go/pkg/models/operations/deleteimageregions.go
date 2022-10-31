package operations



type DeleteImageRegionsPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DeleteImageRegionsQueryParams struct {
    RegionIds []string `queryParam:"style=form,explode=false,name=regionIds"`
    
}

type DeleteImageRegionsHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type DeleteImageRegionsRequest struct {
    PathParams DeleteImageRegionsPathParams 
    QueryParams DeleteImageRegionsQueryParams 
    Headers DeleteImageRegionsHeaders 
    
}

type DeleteImageRegionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

