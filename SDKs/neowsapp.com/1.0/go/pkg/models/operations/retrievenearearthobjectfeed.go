package operations

import (
"openapi/pkg/models/shared")

type RetrieveNearEarthObjectFeedQueryParams struct {
    Detailed *bool `queryParam:"style=form,explode=true,name=detailed"`
    EndDate *string `queryParam:"style=form,explode=true,name=end_date"`
    StartDate *string `queryParam:"style=form,explode=true,name=start_date"`
    
}

type RetrieveNearEarthObjectFeedRequest struct {
    QueryParams RetrieveNearEarthObjectFeedQueryParams 
    
}

type RetrieveNearEarthObjectFeedResponse struct {
    ContentType string 
    NearEarthObjectList *shared.NearEarthObjectList 
    StatusCode int64 
    
}

