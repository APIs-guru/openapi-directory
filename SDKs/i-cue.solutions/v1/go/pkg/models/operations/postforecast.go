package operations

import (
"openapi/pkg/models/shared")

type PostForecastHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostForecastRequests struct {
    PlanningLevelRequest *shared.PlanningLevelRequest `request:"mediaType=application/*+json"`
    PlanningLevelRequest1 *shared.PlanningLevelRequest `request:"mediaType=application/json"`
    PlanningLevelRequest2 *shared.PlanningLevelRequest `request:"mediaType=text/json"`
    
}

type PostForecastRequest struct {
    Headers PostForecastHeaders 
    Request *PostForecastRequests 
    
}

type PostForecastResponse struct {
    Body []byte 
    ContentType string 
    ForecastResponse *shared.ForecastResponse 
    StatusCode int64 
    
}

