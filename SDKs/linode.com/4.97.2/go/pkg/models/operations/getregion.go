package operations

import (
"openapi/pkg/models/shared")

type GetRegionPathParams struct {
    RegionID string `pathParam:"style=simple,explode=false,name=regionId"`
    
}

type GetRegionRequest struct {
    PathParams GetRegionPathParams 
    
}

type GetRegionDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetRegionResponse struct {
    ContentType string 
    Region *shared.Region 
    StatusCode int64 
    GetRegionDefaultApplicationJSONObject *GetRegionDefaultApplicationJSON 
    
}

