package operations

import (
"openapi/pkg/models/shared")

type GetSectionSearchResultsPathParams struct {
    SearchTerm string `pathParam:"style=simple,explode=false,name=searchTerm"`
    
}

type GetSectionSearchResultsQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type GetSectionSearchResultsRequest struct {
    PathParams GetSectionSearchResultsPathParams 
    QueryParams GetSectionSearchResultsQueryParams 
    
}

type GetSectionSearchResultsResponse struct {
    Body []byte 
    ContentType string 
    ErskineMaySearchErskineMaySectionSearchResult *shared.ErskineMaySearchErskineMaySectionSearchResult 
    StatusCode int64 
    
}

