package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDGroupsPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDGroupsRequest struct {
	PathParams GetOfferingsOfferingIDGroupsPathParams
}

type GetOfferingsOfferingIDGroupsResponse struct {
	AssessmentGroupResponses []shared.AssessmentGroupResponse
	ContentType              string
	Error                    *shared.Error
	StatusCode               int64
}
