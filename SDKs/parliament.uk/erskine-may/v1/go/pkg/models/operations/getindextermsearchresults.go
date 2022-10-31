package operations

import (
"openapi/pkg/models/shared")

type GetIndexTermSearchResultsPathParams struct {
    SearchTerm string `pathParam:"style=simple,explode=false,name=searchTerm"`
    
}

type GetIndexTermSearchResultsQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type GetIndexTermSearchResultsRequest struct {
    PathParams GetIndexTermSearchResultsPathParams 
    QueryParams GetIndexTermSearchResultsQueryParams 
    
}

type GetIndexTermSearchResultsResponse struct {
    Body []byte 
    ContentType string 
    ErskineMaySearchErskineMayIndexTermSearchResult *shared.ErskineMaySearchErskineMayIndexTermSearchResult 
    StatusCode int64 
    
}

