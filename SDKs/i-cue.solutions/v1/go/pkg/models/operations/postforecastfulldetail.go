package operations

import (
"openapi/pkg/models/shared")

type PostForecastFullDetailHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostForecastFullDetailRequests struct {
    PlanningLevelRequest *shared.PlanningLevelRequest `request:"mediaType=application/*+json"`
    PlanningLevelRequest1 *shared.PlanningLevelRequest `request:"mediaType=application/json"`
    PlanningLevelRequest2 *shared.PlanningLevelRequest `request:"mediaType=text/json"`
    
}

type PostForecastFullDetailRequest struct {
    Headers PostForecastFullDetailHeaders 
    Request *PostForecastFullDetailRequests 
    
}

type PostForecastFullDetailResponse struct {
    Body []byte 
    ContentType string 
    FullDetailsForecastResponse *shared.FullDetailsForecastResponse 
    StatusCode int64 
    
}

