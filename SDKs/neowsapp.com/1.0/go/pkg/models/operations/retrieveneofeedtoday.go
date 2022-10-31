package operations

import (
"openapi/pkg/models/shared")

type RetrieveNeoFeedTodayQueryParams struct {
    Detailed *bool `queryParam:"style=form,explode=true,name=detailed"`
    
}

type RetrieveNeoFeedTodayRequest struct {
    QueryParams RetrieveNeoFeedTodayQueryParams 
    
}

type RetrieveNeoFeedTodayResponse struct {
    ContentType string 
    NearEarthObjectList *shared.NearEarthObjectList 
    StatusCode int64 
    
}

