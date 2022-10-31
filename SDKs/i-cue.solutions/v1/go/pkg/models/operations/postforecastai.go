package operations

import (
"openapi/pkg/models/shared")

type PostForecastAiHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostForecastAiRequests struct {
    AiPlanningLevelRequest *shared.AiPlanningLevelRequest `request:"mediaType=application/*+json"`
    AiPlanningLevelRequest1 *shared.AiPlanningLevelRequest `request:"mediaType=application/json"`
    AiPlanningLevelRequest2 *shared.AiPlanningLevelRequest `request:"mediaType=text/json"`
    
}

type PostForecastAiRequest struct {
    Headers PostForecastAiHeaders 
    Request *PostForecastAiRequests 
    
}

type PostForecastAiResponse struct {
    Body []byte 
    ContentType string 
    ForecastResponse *shared.ForecastResponse 
    StatusCode int64 
    
}

