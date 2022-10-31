package operations

import (
"openapi/pkg/models/shared")

type GetCriticsResourceTypeJSONPathParams struct {
    ResourceType string `pathParam:"style=simple,explode=false,name=resource-type"`
    
}

type GetCriticsResourceTypeJSONRequest struct {
    PathParams GetCriticsResourceTypeJSONPathParams 
    
}

type GetCriticsResourceTypeJSON200ApplicationJSON struct {
    Copyright *string `json:"copyright,omitempty"`
    NumResults *int64 `json:"num_results,omitempty"`
    Results []shared.Critic `json:"results,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GetCriticsResourceTypeJSONResponse struct {
    ContentType string 
    GetCriticsResourceTypeJSON200ApplicationJSONObject *GetCriticsResourceTypeJSON200ApplicationJSON 
    StatusCode int64 
    
}

