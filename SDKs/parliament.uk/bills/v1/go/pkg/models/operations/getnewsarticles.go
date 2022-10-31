package operations

import (
"openapi/pkg/models/shared")

type GetNewsArticlesPathParams struct {
    BillID int32 `pathParam:"style=simple,explode=false,name=billId"`
    
}

type GetNewsArticlesQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=Skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=Take"`
    
}

type GetNewsArticlesRequest struct {
    PathParams GetNewsArticlesPathParams 
    QueryParams GetNewsArticlesQueryParams 
    
}

type GetNewsArticlesResponse struct {
    Body []byte 
    ContentType string 
    NewsArticlesSummarySearchResult *shared.NewsArticlesSummarySearchResult 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

