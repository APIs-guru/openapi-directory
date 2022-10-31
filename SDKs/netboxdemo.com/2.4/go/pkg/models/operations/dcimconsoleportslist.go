package operations

import (
"openapi/pkg/models/shared")

type DcimConsolePortsListQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    
}

type DcimConsolePortsListRequest struct {
    QueryParams DcimConsolePortsListQueryParams 
    
}

type DcimConsolePortsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.ConsolePort `json:"results"`
    
}

type DcimConsolePortsListResponse struct {
    ContentType string 
    StatusCode int64 
    DcimConsolePortsList200ApplicationJSONObject *DcimConsolePortsList200ApplicationJSON 
    
}

