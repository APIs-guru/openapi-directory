package operations

import (
"openapi/pkg/models/shared")

type GetRegions200ApplicationJSON struct {
    Data []shared.Region `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetRegionsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetRegionsResponse struct {
    ContentType string 
    StatusCode int64 
    GetRegions200ApplicationJSONObject *GetRegions200ApplicationJSON 
    GetRegionsDefaultApplicationJSONObject *GetRegionsDefaultApplicationJSON 
    
}

