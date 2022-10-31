package operations

import (
"openapi/pkg/models/shared")

type PostForecastRerunHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostForecastRerunRequests struct {
    PlanningLevelReRunRequest *shared.PlanningLevelReRunRequest `request:"mediaType=application/*+json"`
    PlanningLevelReRunRequest1 *shared.PlanningLevelReRunRequest `request:"mediaType=application/json"`
    PlanningLevelReRunRequest2 *shared.PlanningLevelReRunRequest `request:"mediaType=text/json"`
    
}

type PostForecastRerunRequest struct {
    Headers PostForecastRerunHeaders 
    Request *PostForecastRerunRequests 
    
}

type PostForecastRerunResponse struct {
    Body []byte 
    ContentType string 
    ForecastResponse *shared.ForecastResponse 
    StatusCode int64 
    
}

