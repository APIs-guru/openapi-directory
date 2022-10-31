package operations

import (
"openapi/pkg/models/shared")

type UpdateSpotSetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    SetID string `pathParam:"style=simple,explode=false,name=setId"`
    
}

type UpdateSpotSetRequest struct {
    PathParams UpdateSpotSetPathParams 
    Request shared.SpotSetUpdate `request:"mediaType=application/json"`
    
}

type UpdateSpotSetResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

