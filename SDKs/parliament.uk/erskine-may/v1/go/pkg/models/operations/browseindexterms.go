package operations

import (
"openapi/pkg/models/shared")

type BrowseIndexTermsQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    StartLetter *string `queryParam:"style=form,explode=true,name=startLetter"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type BrowseIndexTermsRequest struct {
    QueryParams BrowseIndexTermsQueryParams 
    
}

type BrowseIndexTermsResponse struct {
    Body []byte 
    ContentType string 
    ErskineMaySearchErskineMayIndexTermSearchResult *shared.ErskineMaySearchErskineMayIndexTermSearchResult 
    StatusCode int64 
    
}

