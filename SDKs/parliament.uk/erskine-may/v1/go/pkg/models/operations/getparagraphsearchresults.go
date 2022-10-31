package operations

import (
"openapi/pkg/models/shared")

type GetParagraphSearchResultsPathParams struct {
    SearchTerm string `pathParam:"style=simple,explode=false,name=searchTerm"`
    
}

type GetParagraphSearchResultsQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type GetParagraphSearchResultsRequest struct {
    PathParams GetParagraphSearchResultsPathParams 
    QueryParams GetParagraphSearchResultsQueryParams 
    
}

type GetParagraphSearchResultsResponse struct {
    Body []byte 
    ContentType string 
    ErskineMaySearchErskineMayParagraphSearchResult *shared.ErskineMaySearchErskineMayParagraphSearchResult 
    StatusCode int64 
    
}

