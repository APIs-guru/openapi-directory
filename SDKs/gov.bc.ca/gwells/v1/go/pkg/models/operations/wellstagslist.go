package operations

import (
"openapi/pkg/models/shared")

type WellsTagsListQueryParams struct {
    Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type WellsTagsListRequest struct {
    QueryParams WellsTagsListQueryParams 
    
}

type WellsTagsListResponse struct {
    ContentType string 
    StatusCode int64 
    WellTagSearches []shared.WellTagSearch 
    
}

