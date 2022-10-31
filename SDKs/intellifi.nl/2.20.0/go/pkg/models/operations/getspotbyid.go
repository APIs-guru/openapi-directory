package operations

import (
"openapi/pkg/models/shared")

type GetSpotByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSpotByIDRequest struct {
    PathParams GetSpotByIDPathParams 
    
}

type GetSpotByIDResponse struct {
    ContentType string 
    SpotGet *shared.SpotGet 
    StatusCode int64 
    
}

