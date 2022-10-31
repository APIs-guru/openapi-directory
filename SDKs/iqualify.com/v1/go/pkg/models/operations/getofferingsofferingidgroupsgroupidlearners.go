package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDGroupsGroupIDLearnersPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDGroupsGroupIDLearnersRequest struct {
    PathParams GetOfferingsOfferingIDGroupsGroupIDLearnersPathParams 
    
}

type GetOfferingsOfferingIDGroupsGroupIDLearnersResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    UserResponses []shared.UserResponse 
    
}

