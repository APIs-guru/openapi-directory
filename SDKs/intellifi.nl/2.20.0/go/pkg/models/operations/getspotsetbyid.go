package operations

import (
"openapi/pkg/models/shared")

type GetSpotSetByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    SetID string `pathParam:"style=simple,explode=false,name=setId"`
    
}

type GetSpotSetByIDRequest struct {
    PathParams GetSpotSetByIDPathParams 
    
}

type GetSpotSetByIDResponse struct {
    ContentType string 
    SpotSet *shared.SpotSet 
    StatusCode int64 
    
}

