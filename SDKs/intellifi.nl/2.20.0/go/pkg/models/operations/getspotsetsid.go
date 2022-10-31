package operations

import (
"openapi/pkg/models/shared")

type GetSpotsetsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSpotsetsIDRequest struct {
    PathParams GetSpotsetsIDPathParams 
    
}

type GetSpotsetsIDResponse struct {
    ContentType string 
    SpotSet *shared.SpotSet 
    StatusCode int64 
    
}

