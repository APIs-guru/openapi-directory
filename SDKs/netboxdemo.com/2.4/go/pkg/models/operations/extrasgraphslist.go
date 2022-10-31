package operations

import (
"openapi/pkg/models/shared")

type ExtrasGraphsListQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type ExtrasGraphsListRequest struct {
    QueryParams ExtrasGraphsListQueryParams 
    
}

type ExtrasGraphsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Graph `json:"results"`
    
}

type ExtrasGraphsListResponse struct {
    ContentType string 
    StatusCode int64 
    ExtrasGraphsList200ApplicationJSONObject *ExtrasGraphsList200ApplicationJSON 
    
}

