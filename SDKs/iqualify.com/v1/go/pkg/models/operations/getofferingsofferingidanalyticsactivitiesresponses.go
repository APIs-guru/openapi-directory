package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDAnalyticsActivitiesResponsesRequest struct {
    PathParams GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams 
    
}

type GetOfferingsOfferingIDAnalyticsActivitiesResponsesResponse struct {
    ActivityAttemptOpenResponses []shared.ActivityAttemptOpenResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

