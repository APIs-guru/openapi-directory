package operations

import (
"openapi/pkg/models/shared")

type ExtrasTagsListQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Slug *string `queryParam:"style=form,explode=true,name=slug"`
    
}

type ExtrasTagsListRequest struct {
    QueryParams ExtrasTagsListQueryParams 
    
}

type ExtrasTagsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Tag `json:"results"`
    
}

type ExtrasTagsListResponse struct {
    ContentType string 
    StatusCode int64 
    ExtrasTagsList200ApplicationJSONObject *ExtrasTagsList200ApplicationJSON 
    
}

