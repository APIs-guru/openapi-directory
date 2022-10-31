package operations

import (
"openapi/pkg/models/shared")

type PostOfferingsOfferingIDGroupsPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type PostOfferingsOfferingIDGroupsRequest struct {
    PathParams PostOfferingsOfferingIDGroupsPathParams 
    Request shared.AssessmentGroupRequired `request:"mediaType=application/json"`
    
}

type PostOfferingsOfferingIDGroupsResponse struct {
    AssessmentGroupResponse *shared.AssessmentGroupResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

